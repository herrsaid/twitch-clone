import { currentUser } from "@clerk/nextjs"
import { db } from "./db";

export const getCurrent = async () =>
{
    const self = await currentUser();
    if (!self || !self.username)
        throw Error("Unauthorized")
    const user = await db.user.findUnique(
        {
            where:{externalUserId:self.id}
        })
    if (!user)
        throw Error("user not found")
    return user;
}

export const getSelfByUsername = async (username:string) => {
    const self = await getCurrent()
    if (!self || !self.username)
        throw new Error("user not found")
    const user = await db.user.findUnique({
        where:{username}
    })
    if (!user)
        throw new Error("user not found")
    if (user.username !== self.username)
        throw new Error("Unauthorized")
    return user
}