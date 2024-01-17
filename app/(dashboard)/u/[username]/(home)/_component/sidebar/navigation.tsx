
import { KeyRound, MessageCircle, Radio, Users } from "lucide-react"
import NavItem from "./navitem";
import { getCurrent } from "@/lib/current-service";




export default async function Navigation()
{
    const user = await getCurrent()
    const routes = [
        {
            icon: Radio,
            label: "Stream",
            url: `${user.username}/stream`
        },
        {
            icon: KeyRound,
            label: "Keys",
            url: `${user.username}/keys`
        },
        {
            icon: MessageCircle,
            label: "Chat",
            url: `${user.username}/chat`
        },
        {
            icon: Users ,
            label: "Community",
            url: `${user.username}/community`
        }
    ]
    return (
        <div className="flex flex-col w-full">
            {routes.map((route, index) => {return <NavItem key={index} icon={route.icon} label={route.label} url={route.url} />})}
        </div>
    )
}