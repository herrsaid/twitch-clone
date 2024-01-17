import { getCurrent } from "@/lib/current-service"
import StreamPlayer from "../../../../../components/stream-player"
import { getUserByUsername } from "@/lib/user-service"
import { currentUser } from "@clerk/nextjs"


interface CreatorParamsProps{
    params : {
        username: string
    }
}

export default async function CreatorPage( {params}: CreatorParamsProps){

    const self = await currentUser()
    const user = await getUserByUsername(params.username)

    if (!user || user.externalUserId !== self?.id || !user.stream) 
        throw new Error("Unauthorized");

    return (
        <div className="h-full p-4">
            <StreamPlayer user={user} stream={user.stream} />
        </div>
    )
}