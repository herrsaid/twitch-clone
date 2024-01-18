"use client"
import { useTracks } from "@livekit/components-react";
import { trace } from "console";
import { Participant, Track } from "livekit-client";
import { useRef,useState } from "react";
import FullScreenControl from "./fullscreencontrol";
import { useEventListener } from "usehooks-ts";

interface LiveVideoProps {
    participant: Participant;
}

export default function LiveVideo({participant}: LiveVideoProps) {

    const videoRef = useRef<HTMLVideoElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant === participant)
    .forEach((track) => {
        if(videoRef.current)
            track.publication.track?.attach(videoRef.current)
    })
    const handleFullscreenChange = () => {
        const isCurrentlyFullscreen = document.fullscreenElement !== null;
        setIsFullScreen(isCurrentlyFullscreen);
      }
    
      useEventListener("fullscreenchange", handleFullscreenChange, wrapperRef);
    
    const onToggel = () => {
        if (isFullScreen)
            document.exitFullscreen()
        else if (wrapperRef.current)
            wrapperRef.current.requestFullscreen();
    }
    return (
        <div ref={wrapperRef} className="w-96 h-96 relative" >
            <video ref={videoRef} width="100%" />
            <div className=" absolute bottom-0">
                <FullScreenControl  onToggel={onToggel} isFullScreen={isFullScreen}/> 
            </div>
        </div>
    )
}
