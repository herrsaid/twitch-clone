import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs"
import { Ghost, LayoutDashboard } from "lucide-react";
import Link from "next/link";


export default async function Action()
{
    const user = await currentUser();
    return(
        <div className="flex gap-3">
            {!user &&
                <SignInButton>
                    <Button variant={"primary"}>Login</Button>
                </SignInButton>
            }
            {!!user &&
                <div className="flex items-center gap-y-3">
                    <Button variant="ghost" className=" flex text-muted-foreground hover:text-primary">
                    <Link className="flex" href={`/u/${user.username}`}>
                        <LayoutDashboard className="lg:mr-2"/>
                        <span className=" hidden lg:block">
                            Dashboard
                        </span>
                    </Link >
                    </Button>
                    <UserButton afterSignOutUrl="/" />
                </div>
            }
        </div>
    )
}