"use client"
import { useTracks } from "@livekit/components-react";
import { trace } from "console";
import { Participant, Track } from "livekit-client";
import { useRef } from "react";
import FullScreenControl from "./fullscreencontrol";

interface LiveVideoProps {
    participant: Participant;
}

export default function LiveVideo({participant}: LiveVideoProps) {

    const videoRef = useRef<HTMLVideoElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone])
    .filter((track) => track.participant === participant)
    .forEach((track) => {
        if(videoRef.current)
            track.publication.track?.attach(videoRef.current)
    })

    return (
        <div ref={wrapperRef} className="w-96 h-96 border border-green-500" >
            <video ref={videoRef} width="100%" />
            <FullScreenControl onToggel={() => {null}} isFullScreen={false}/> 
        </div>
    )
}