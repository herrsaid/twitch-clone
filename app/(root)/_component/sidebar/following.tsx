"use client"

import { useSidebar } from "@/store/sidebarStore";
import { follow, user } from "@prisma/client"
import UserItem from "./useritem";
import { use } from "react";

interface FollowingProps{
    data: (follow & {following: user})[];
}
export default function Following({data}:FollowingProps)
{
    const {collapsed} = useSidebar((state) => state);

    const showLabel = !collapsed && data.length > 0;
    return (
        <div className="flex flex-col">
            {showLabel &&
                <div className="p-3 text-muted-foreground">
                    Following
                </div>
            }
            <ul>
                {data.map((user) => <UserItem key={user.following.id} username={user.following.username} ImageUrl={user.following.imageUrl} isLive={false}></UserItem>)}
            </ul>
        </div>
    )
}