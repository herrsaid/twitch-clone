import { getCurrent } from "./current-service";
import { db } from "./db"

export const getRecommended = async () => {
    let userId
    try{
        const self = await getCurrent();
        userId = self.id
    }
    catch{
        userId = null;
    }
    let users = []
    
    if (userId)
    {
        users = await db.user.findMany({
            where:{
                AND:[{
                    NOT:{
                        followers : {
                            some:{
                                followerId:userId
                            }
                        }
                    }
                }, {
                    NOT : {
                    id:userId
                },
            },
        {
            NOT:{
            blockedBy:{
                some:{
                    blockerId:userId
                }
            }
        }}]
            },
            include:{
                stream:true
            },
            orderBy: {
                createdAt: "desc"
            }
        })
    }
    else
    {
        users = await db.user.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include:{
                stream:true
            }
        })
    }
    return users;
}