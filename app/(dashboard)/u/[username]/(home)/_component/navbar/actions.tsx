import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs"
import { Ghost, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";


export default async function Action()
{
    const user = await currentUser();
    return(
        <div className="flex gap-3">
             <Button size={"sm"} className=" text-muted-foreground" asChild variant={"ghost"}>
                <Link href={"/"}>
                    <LogOut/>
                    Exit
                </Link>
             </Button>
             <UserButton afterSignOutUrl="/" />
        </div>
    )
}