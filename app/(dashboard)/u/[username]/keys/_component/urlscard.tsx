import { Input } from "@/components/ui/input"
import Copy from "./copy"

interface UrlsCardProps{
    value: string
}
export default function UrlsCard({value}:UrlsCardProps)
{
    return (
        <div className=" flex p-6 bg-muted mt-2 rounded-md justify-between">
            <div>
                <p className="text-xl font-semibold p-2">Server Url</p>
            </div>
            <div className="flex">
                <Input value={value} disabled/>
                <Copy value={value}/>
            </div>
        </div>
    )
}