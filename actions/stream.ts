"use server"

import { getCurrent } from "@/lib/current-service"
import { db } from "@/lib/db"
import { stream } from "@prisma/client"
import { revalidatePath } from "next/cache"

export const updateStream = async (values:Partial<stream>) => {
    try{
        const self = await getCurrent()
        console.log(self)
        const selfStream = await db.stream.findUnique({
            where:{
                userId:self.id
            }
        })
        if (!selfStream)
            throw new Error("Stream not found")
        const validData = {
            name: values.name,
            isChatEnabled:values.isChatEnabled,
            isChatDelayed:values.isChatDelayed,
            isChatFollowerOnly: values.isChatFollowerOnly
        }

        const stream = await db.stream.update({
            where:{userId:self.id},
            data:{
                ...validData,
            }
        })

        revalidatePath(`/u/${self.username}/chat`)
        revalidatePath(`/u/${self.username}`)
        revalidatePath(`/${self.username}`)

        return stream;
    }catch (error){
        console.log("error", error)
        throw new Error("internal error")
    }
}