
import { getStreamByUserId } from "@/lib/stream-service";
import ToggleCard from "./_component/toggelcard";
import { getCurrent } from "@/lib/current-service";


export default  async function Chat(){
    const user = await getCurrent()
    const stream = await getStreamByUserId(user.id)
    if (!stream)
        throw new Error("Stream not found")
    return (
        <div className=" flex flex-col p-2">
            <div className="p-3">
                <p className=" text-xl font-semibold">Chat settings</p>
            </div>
            <ToggleCard label="Enable Chat" value={stream.isChatEnabled} field="isChatEnabled"/>
            <ToggleCard label="Delay Chat" value={stream.isChatDelayed} field="isChatDelayed"/>
            <ToggleCard label="Follower Only Chat" value={stream.isChatFollowerOnly} field="isChatFollowerOnly"/>
        </div>
    )
}