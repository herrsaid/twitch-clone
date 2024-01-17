"use client"
import { updateStream } from "@/actions/stream";
import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { toast } from "sonner";

type field = "isChatEnabled" | "isChatDelayed" | "isChatFollowerOnly"

interface ToggleCardProps {
    field:field;
    value:boolean;
    label:string
}
export default function ToggleCard({field, value = true, label}:ToggleCardProps){
    const [Ispending, startTransition] = useTransition()
    const onChange = () =>
    {
        startTransition(() => {
            updateStream({[field]:!value})
            .then(() => toast.success("Success"))
            .catch(() => toast.error("somting went wrong"))
        })
    }
    return (
        <div className="flex justify-between bg-muted rounded-lg p-6 my-2">
            <div>
                <p className="font-semibold shrink-0">{label}</p>
            </div>
            <div>
                <Switch disabled={Ispending} onCheckedChange={onChange} checked={value}>{value ? "On": "Off"}</Switch>
            </div>
        </div>
    )
}