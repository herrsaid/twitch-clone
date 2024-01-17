
"use client"

import { Button } from "@/components/ui/button"
import { CheckCheck, Folders } from "lucide-react"
import { useState } from "react"

interface CopyProps{
    value:string
}

export default function Copy({value}:CopyProps)
{
    const [copy, setCopy] = useState(false)
    const onCopy = () => {
        navigator.clipboard.writeText(value);
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 1000);
    }

    const Icon = copy ? CheckCheck :  Folders
    return (
        <div>
            <Button onClick={onCopy} variant="ghost" > <Icon/> </Button>
        </div>
    )
}