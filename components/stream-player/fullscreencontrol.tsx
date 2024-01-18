
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
    const Icon = isFullScreen ? Maximize : Minimize;
    return (
        <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Button onClick={onToggel} variant="outline"><Icon /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{label}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}