
"use server";

import { UnfollowUser, followUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const follow = async (id:string) => {
    try{
        const following = await followUser(id);
        revalidatePath("/")
        if(following)
            revalidatePath(`/${following.following.username}`)
        return following;
    }
    catch{
        throw Error("canot follow this user")
    }
}

export const unfollow = async (id:string) => {
    try{
        const unfollow = await UnfollowUser(id);
        revalidatePath("/")
        if (unfollow)
            revalidatePath(`/${unfollow.following.username}`)
        return unfollow;
    }
    catch{
        throw new Error("canot unfollow user")
    }
}