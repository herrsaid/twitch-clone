import { isFollowUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import Follow from "./_component/follow";
import { isBlockedBy } from "@/lib/block-service";

interface UserPageProps{
    params:{
        username:string;
    }
}

export default async function UserPage({params}: UserPageProps)
{
    const user = await getUserByUsername(params.username);
    if (!user)
        notFound()
    const isFollowing = await isFollowUser(user.id)
    const isBlocking = await isBlockedBy(user.id)
    return (
        <div>
            {user?.username}
            is following: {`${isFollowing}`}
            <Follow isFollowing={isFollowing} isBlocking={isBlocking} userId={user.id}/>
        </div>
    )
}