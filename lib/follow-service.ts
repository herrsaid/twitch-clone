import { getCurrent } from "./current-service"
import { db } from "./db";
import { getUserByUsername } from "./user-service";

export const isFollowUser = async (id:string) =>
{
    try
    {
        const self = await getCurrent()
        const otherUser = await db.user.findUnique({
            where:{id}
        })
        if (!otherUser)
            throw Error("user not found");
        if (otherUser.id == self.id)
            return true
    
        const exestingFollow = await db.follow.findFirst({
            where:{
                followerId: self.id,
                followingId: otherUser.id
            }
        })
        return !!exestingFollow;
    }
    catch
    {
        return false;
    }
}

export const followUser = async (id:string) => {
    const self = await getCurrent()
    const otherUser = await db.user.findUnique({
        where:{id}
    })

    if (!otherUser)
        throw Error("User not found")
    if (otherUser.id == self.id)
        throw Error("Canout Follow yourself")
    
    const exestingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser.id
        }
    })

    if (!exestingFollow)
    {
        const follow = await db.follow.create({
            data:{
                followerId:self.id,
                followingId:otherUser.id
            },
            include:{
                follower:true,
                following:true
            }
        }
        )
        return follow
    }
    return null
}

export const  UnfollowUser = async (id:string) => {
    const self = await getCurrent();

    const otherUser = await db.user.findUnique({
        where:{id}
    })

    if (!otherUser)
        throw new Error("user not found")

    if (otherUser.id === self.id)
        throw new Error("canout unfollow yourself")

    const exestingFollow = await db.follow.findFirst({
        where:{
            followerId:self.id,
            followingId:otherUser.id
        }
    })

    if (exestingFollow)
    {
        const unfollow = await db.follow.delete({
            where:{
                id: exestingFollow.id
            },
            include:{
                following:true
            }
        })
        return unfollow
    }
}

export const getFollowing = async () => {
    try
    {
        const self = await getCurrent()
        const following = await db.follow.findMany({
            where:{
                followerId:self.id,
                following:{
                    blocking:{
                        none:{
                            blockerId: self.id
                        }
                    }
                }
            },
            include:{
                following:true,
            },
        })
        return following
    }
    catch{
        return []
    }
}