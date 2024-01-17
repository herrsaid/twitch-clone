"use client"
import { block, unblock } from "@/actions/block";
import { follow, unfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface isFollowingProps{
    isFollowing:boolean;
    isBlocking:boolean
    userId:string;
}
export default function Follow({isFollowing, isBlocking, userId}:isFollowingProps)
{
    const [pending, startTrasition] = useTransition()
    const onFollow = () => {
        startTrasition(()=>{
            follow(userId).then((data)=> toast.success(`you followed ${data?.following.username}`)).catch(()=> toast.error("Somting went wrong"))
        })
    }
    const onUnfollow = () => {
        startTrasition(()=>{
            unfollow(userId).then((data)=> toast.success(`you unfollowed ${data?.following.username}`)).catch(()=> toast.error("Somting went wrong"))
        })
    }
    const onBlock = () => {
        startTrasition(()=>{
            block(userId).then((data) => toast.success(`you blocked ${data?.blocked.username}`)).catch(() => toast.error("somthing went wrong"))
        })
    }
    const onUnBlock = () => {
        startTrasition(()=>{
            unblock(userId).then((data) => toast.success(`you blocked ${data?.blocked.username}`)).catch(() => toast.error("somthing went wrong"))
        })
    }
    const onFollowClick = () => {
        if (isFollowing)
            onUnfollow();
        else
            onFollow()
    }
    const onBlockClick = () => {
        if (isBlocking)
            onUnBlock();
        else
            onBlock()
    }
    return (
        <div className=" gap-3 p-3">
            <Button disabled={pending} onClick={onFollowClick} variant="primary">{isFollowing? "unfollow": "follow"}</Button>
            <Button disabled={pending} onClick={onBlock} >{isBlocking ? "unblock": "block"}</Button>
        </div>
    )
}