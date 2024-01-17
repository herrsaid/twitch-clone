"use client"
import { useViewerToken } from "@/hooks/use-viewer-token";
import { stream, user } from "@prisma/client"
import Video from "./video";
import { LiveKitRoom } from "@livekit/components-react";


interface StreamPlayerProps {
    user:user;
    stream:stream;
}

export default  function StreamPlayer({user, stream} : StreamPlayerProps)  {

    const {token, name, identity} = useViewerToken(user.id)

    if (!token || !identity || !name)
        return (<>not authorized</>)
    return (
        <>
            <LiveKitRoom token={token} serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_SOCKET_URL}>
                <Video 
                hostName={user.username} 
                hostIdentity={user.id}/>
            </LiveKitRoom>
        </>
    )
}