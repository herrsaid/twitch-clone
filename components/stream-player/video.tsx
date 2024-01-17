
"use client"

import { ConnectionState, Track } from "livekit-client";
import { 
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react"
import LiveVideo from "./live-video";

interface VidioProps {
    hostName:string;
    hostIdentity:string
}

export default function Video({hostIdentity, hostName}:VidioProps){

    const connectionState = useConnectionState()
    const participant = useRemoteParticipant(hostIdentity);
    const tracks = useTracks(
        [Track.Source.Camera,
        Track.Source.Microphone]
        ).filter((track) => track.participant.identity === hostIdentity)

    let content;

    if (!participant && connectionState === ConnectionState.Connected)
            content = "offline"
    else if (!participant || tracks.length === 0)
            content = "loading..."
    else
            content = <LiveVideo participant={participant}/>
    return (
        <div className="border border-rose-600">
            {content}
        </div>
    )
}