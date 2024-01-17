"use server"

import { BlockUser, UnBlockUser } from "@/lib/block-service"
import { revalidatePath } from "next/cache"

export const block = async (id:string) => {
    try{
        const block = await BlockUser(id)

        revalidatePath("/")

        if (block)
            revalidatePath(`/${block.blocked.username}`);
        return block
    }
    catch {
        throw new Error(" zabi Not Blocked")
    }
}

export  const unblock = async (id:string) => {
    try{
        const unblock = await UnBlockUser(id);

        revalidatePath("/")

        if (unblock)
            revalidatePath(`/${unblock.blocked.username}`);
        return unblock
    }
    catch
    {
        throw new Error ("canot unBlock")
    }
}