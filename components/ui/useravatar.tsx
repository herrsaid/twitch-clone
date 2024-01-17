import { cva } from "class-variance-authority"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

interface AvatarPorps{
    username:string;
    imageUrl:string;
    isLive?:boolean;
    showBadge?:boolean
}

export default function UserAvatar({username, imageUrl, isLive, showBadge} : AvatarPorps)
{
    return (
        <Avatar className={cn(isLive && "ring-2 ring-rose-500 border border-background")}>
            <AvatarImage src={imageUrl}/>
            <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>
    )
}
