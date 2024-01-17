"use client"
import { CreateViewerToken } from "@/actions/token"
import { useEffect, useState } from "react"

import {JwtPayload, jwtDecode} from "jwt-decode"
import { toast } from "sonner"

export const useViewerToken = (hostId:string) => {
    const [token, setToken] = useState("")
    const [name, setName] = useState("")
    const [identity, setIdentity] = useState("")

    useEffect(() => {
        const createToken = async () => {
            try{
                const viewertoken = await CreateViewerToken(hostId);
                setToken(viewertoken);
                const decodedToken = jwtDecode(viewertoken) as JwtPayload & { name?: string}

                const identity = decodedToken.jti;
                const name = decodedToken.name;
                if (identity)
                    setIdentity(identity)
                if (name)
                    setName(name)
            }catch{
                toast.error("Something went wrong");
            }
        }
        createToken();
    }, [hostId])
    
    return {
        token,
        name,
        identity
    }
}