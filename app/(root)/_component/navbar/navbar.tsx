import Image from "next/image";
import Action from "./actions";
import Search from "./search";
import Link from "next/link";

export default function Navbar()
{
    return (
        <nav className=" fixed top-0 h-20 px-2 lg:px-4 z-40 justify-between items-center w-full bg-[#252731] flex">
            <Link className=" max-sm:hidden m-2" href={'/'}>
                <Image 
                    src={"logo.svg"}
                    height={120}
                    width={120}
                    alt="logo"
                />
            </Link>
            <Search/>
            <Action/>
        </nav>
    )
}