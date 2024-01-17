
"use client"

import { Maximize, Minimize } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

interface FullScreenControlProps {
    isFullScreen : boolean;
    onToggel : () => void;
}

export default function FullScreenControl({
    isFullScreen,
    onToggel
} : FullScreenControlProps){

    const label = isFullScreen ? "Exit fullscreen" : "Enter fullscreen"
    return (
        <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{label}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}