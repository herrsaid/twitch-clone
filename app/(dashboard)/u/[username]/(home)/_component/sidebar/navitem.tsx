
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react"
import Link from "next/link";

interface NavItemProps{
    icon:LucideIcon;
    label:string;
    url:string;

}

export default function NavItem({icon:Icon, label, url}:NavItemProps)
{
    return (
        <div className="flex p-3">
            <Button className="flex w-full justify-start p-3" asChild variant="ghost">
                <Link className=" gap-3" href={url}>
                    <Icon />
                    <p>{label}</p>
                </Link>
            </Button>
        </div>
    )
}
