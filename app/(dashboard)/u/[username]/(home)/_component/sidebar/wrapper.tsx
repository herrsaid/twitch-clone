
"use client"

import { cn } from "@/lib/utils";
import { useCreatorSidbar } from "@/store/sidebar-creator-store";

interface WrapperProps {
    children: React.ReactNode;
}

export default function Wrapper({children}: WrapperProps)
{
    const {collapsed} = useCreatorSidbar((state) => state)
    return(
        <aside className={cn("fixed flex h-full left-0 flex-col w-60 bg-background border-[#2D3E35]", collapsed && "w-[70px]")}>
            {children}
        </aside>
    )
}