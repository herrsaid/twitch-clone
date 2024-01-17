
import KeyCard from "./_component/keycard";
import UrlsCard from "./_component/urlscard";
import ShowDialog from "./_component/dialog";
import { getCurrent } from "@/lib/current-service";
import { getStreamByUserId } from "@/lib/stream-service";

export default async function Keys()
{
    const self = await getCurrent();
    const stream = await getStreamByUserId(self.id);

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <p className=" text-2xl font-bold">Keys & URLs</p>
                <ShowDialog/>
            </div>
            <UrlsCard value={stream?.serverId!}/>
            <KeyCard value={stream?.streamKey!}/>
        </div>
    )
}