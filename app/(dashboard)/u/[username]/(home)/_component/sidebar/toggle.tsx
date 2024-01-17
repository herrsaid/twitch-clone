"use client"

import { Button } from "@/components/ui/button";
import { useCreatorSidbar } from "@/store/sidebar-creator-store"
import { ArrowLeftFromLine, ArrowRightFromLine, Divide } from "lucide-react";

export default function Toggle()
{
    const {collapsed, onCollaps, onExpend} = useCreatorSidbar((state)=> state);
    return (
        <div className="flex">
            {collapsed && 
                <div className="flex justify-center gap-3 p-2">
                    <Button variant="ghost" onClick={onExpend}><ArrowRightFromLine/></Button>
                </div>
            }
            {!collapsed &&
                <div className="flex gap-3 p-3 w-full justify-between">
                    <p className=" text-muted-foreground p-2 font-semibold">Dashborad</p>
                    <Button  variant="ghost" onClick={onCollaps}><ArrowLeftFromLine/></Button>
                </div>
            }
        </div>
    )
}