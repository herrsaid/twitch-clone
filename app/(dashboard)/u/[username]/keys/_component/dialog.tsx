"use client"
import { createIngress } from "@/actions/ingress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {DialogHeader,
    DialogDescription,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger } from "@/components/ui/dialog";
import { Select,
    SelectContent,
    SelectItem, SelectTrigger,
    SelectValue } from "@/components/ui/select";
import { DialogClose } from "@radix-ui/react-dialog";
import { IngressInput } from "livekit-server-sdk";
import { AlertTriangle } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
export default function ShowDialog()
{
    const RTMP = String(IngressInput.RTMP_INPUT);
    const WHIP = String(IngressInput.WHIP_INPUT);

    type IngressType = typeof RTMP | typeof WHIP;
    const [ingressType, setIngressType] = useState<IngressType>(RTMP);
    const [isPending, startTransition] = useTransition();

    const onSubmit = () => {

        startTransition(() => {
            try
            {
                createIngress(parseInt(ingressType)).then(()=>{
                    toast.success("Ingress created")
                }).catch((data) => {
                    console.log('data', data)
                    toast.error("somthing went wrong")
                })
            }
            catch(error){
                console.log("error",error)
            }
        })
    }

    return(
        <Dialog>
            <DialogTrigger asChild ><Button variant="primary">Generate connection</Button></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Generate connection</DialogTitle>
                </DialogHeader>
                <Select disabled={isPending} onValueChange={(value) => setIngressType(value)} >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Ingrees Type"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value={RTMP}>RTMP</SelectItem>
                        <SelectItem value={WHIP}>WHIP</SelectItem>
                    </SelectContent>
                </Select>
                <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Warning!</AlertTitle>
                    <AlertDescription>
                        This action will reset all active streams using the current connection
                    </AlertDescription>
                </Alert>
                <div className="flex justify-between">
                    <DialogClose><Button>Cancel</Button></DialogClose>
                    <Button disabled={isPending} onClick={onSubmit} variant="primary">Generate</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}