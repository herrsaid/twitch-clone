"use client"
import { Input } from "@/components/ui/input";
import Copy from "./copy";
import { Button } from "@/components/ui/button";
import { EyeOff } from "lucide-react";
import { useState } from "react";

interface KeyCardProps{
    value:string
}
export default  function KeyCard({value}: KeyCardProps)
{
    const [show, setShow] = useState(false)
    
    return (
        <div className="border flex p-6 bg-muted mt-2 rounded-md gap-x-10 justify-between">
            <div>
                <p className=" text-xl font-semibold p-2 shrink-0">Stream Key</p>
            </div>
            <div className="flex ">
                <div className="relative border">
                    <Input value={value} className=" w-full" disabled type={!show ? "password" : "text"} placeholder={value}/>
                    <Button onClick={()=> setShow(!show)} 
                        variant="ghost" 
                        className=" absolute top-0 right-0"><EyeOff size={20}/></Button>
                </div>
                <Copy value={value}/>
            </div>
        </div>
    )
}