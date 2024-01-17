
"use client"

import { cn } from "@/lib/utils";
import { useCreatorSidbar } from "@/store/sidebar-creator-store";

interface ContainerProps{
    children: React.ReactNode;
}

export default function Container({children}:ContainerProps)
{
    const {collapsed} = useCreatorSidbar((state) => state)
    return (
        <div className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}>
            {children}
        </div>
    )
}