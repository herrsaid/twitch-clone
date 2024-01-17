"use client"
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarStore";
import React from "react";

export default function Wrapper({children} : {children: React.ReactNode})
{
    const {collapsed} = useSidebar((store) => store);
    return(
        <aside className={cn("fixed h-full flex flex-col w-60 bg-background", collapsed && "w-[70px]")}>
            {children}
        </aside>
    )
}