"use client"
import { useSidebar } from "@/store/sidebarStore"
import { stream, user } from "@prisma/client"
import UserItem from "./useritem";

interface RecommendedProps{
    data: (user & {stream : stream | null})[];
}

export default function Recommended({data}: RecommendedProps)
{
    const {collapsed} = useSidebar((state) => state);

    const showLabel = !collapsed && data.length > 0;
    return (
        <>
            {showLabel &&
                <p className="p-3 text-muted-foreground">recommended</p>
            }
            <ul>
                {data.map((user) => <UserItem key={user.id} username={user.username} ImageUrl={user.imageUrl} isLive={user.stream?.isLive}></UserItem>)}
            </ul>
        </>
    )
}