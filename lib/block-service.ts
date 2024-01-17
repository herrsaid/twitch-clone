
import { getCurrent } from "./current-service";
import { db } from "./db";

export const isBlockedBy = async (id:string) => {
    try{
        const self = await getCurrent()
        const otherUser = await db.user.findUnique({
            where : {
                id,
            }
        })
        if (!otherUser)
            throw new Error("user not found")
        const isBlocked = await db.block.findFirst({
            where:{
                blockerId: otherUser.id,
                blockedId: self.id,
            }
        })
        return !!isBlocked
    }
    catch{
        return false
    }
}

export const BlockUser = async (id:string) => {
    try{
        const self = await getCurrent()
        const otherUser = await db.user.findUnique({
            where:{
                id
            }
        })
        if (!otherUser)
            throw new Error("user not found")

        if (self.id === id)
            throw new Error("Can't block yourself")

        const exestingBlock = await db.block.findFirst({
            where:{
                blockerId:self.id,
                blockedId:otherUser.id
            }
        })

        if (!exestingBlock)
        {
            const Block = db.block.create({
                data:{
                    blockedId:otherUser.id,
                    blockerId:self.id
                },
                include:{
                    blocked:true,
                }
            })
            return Block
        }
    }
    catch
    {
        throw new Error("canot block user")
    }
}

export const UnBlockUser = async (id:string) => {
    try{
        const self = await getCurrent()
        const otherUser = await db.user.findUnique({
            where:{id}
        })
        
        if (otherUser && self.id == otherUser.id)
            throw new Error("canot block yourself")
        if (!otherUser)
            throw new Error("user not found")
        const exestingBlock = await db.block.findFirst({
            where:{
                blockerId: self.id,
                blockedId:otherUser.id
            }
        })
        if (!exestingBlock)
            throw new Error("user not blocked")
        const unblock = await db.block.delete({
            where:{
                id:exestingBlock.id,
            },
            include:{
                blocked:true
            }
        })
        return unblock
    }
    catch{
        throw new Error("somthing went wrong")
    }
    
}