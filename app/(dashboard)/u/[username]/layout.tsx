import { getSelfByUsername } from "@/lib/current-service";
import { redirect } from "next/navigation";
import Navbar from "./(home)/_component/navbar/navbar";
import Sidebar from "./(home)/_component/sidebar/sidebar";
import Container from "./(home)/_component/sidebar/container";

interface CreatorLyoutProps{
    params:{username:string};
    children:React.ReactNode
}

export default async function CreatorLayout({params, children}:CreatorLyoutProps)
{
    const self = await getSelfByUsername(params.username)
    if (!self)
       redirect("/")
    return (
        <>
            <Navbar />
            <div className="flex h-full pt-20">
                <Sidebar/>
                <Container>
                    {children}
                </Container>
            </div>
        </>
    )
}