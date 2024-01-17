"use client"

import { Button } from "@/components/ui/button";
import LiveBadge from "@/components/ui/livebadge";
import UserAvatar from "@/components/ui/useravatar";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarStore";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface UserItemProps
{
    username: string,
    ImageUrl: string,
    isLive?: boolean;
}

export default function UserItem({username, ImageUrl, isLive} : UserItemProps)
{
    const {collapsed} = useSidebar((state) => state)
    const href = `/${username}`
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Button 
        asChild
        variant="ghost"
        className={cn("w-full h-12", collapsed ? " justify-center" : "justify-start", isActive && "bg-accent")}>
            <Link className=" relative flex items-center w-full gap-x-4" href={href}>
                <UserAvatar username={username} imageUrl={ImageUrl} isLive={isLive} />
                {!collapsed && <p className="truncate">{username}</p>}
                {!collapsed && isLive && <div className=" absolute right-2"><LiveBadge/></div>}
            </Link>
        </Button>
    )
}