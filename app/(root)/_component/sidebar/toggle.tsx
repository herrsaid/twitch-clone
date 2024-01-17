"use client"
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/sidebarStore";
import { ArrowLeftToLine, ArrowRight } from "lucide-react";


export default function Toggle(){
    const {collapsed, onExpend, onCollaps} = useSidebar((store) => store)
    return(
        <>
            {!collapsed &&
                <div className="flex w-full justify-between p-3">
                    <p className=" font-semibold p-2">For you</p>
                    <Button variant="ghost" onClick={onCollaps}>
                        <ArrowLeftToLine />
                    </Button>
                </div>
            }
            {collapsed &&
                <div className="flex justify-center m-2">
                    <Button variant="ghost" onClick={onExpend}>
                        <ArrowRight />
                    </Button>
                </div>
            }
        </>
    )
}