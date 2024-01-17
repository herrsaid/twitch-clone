"use client"
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import qs from 'query-string'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useRouter} from 'next/navigation'

export default function Search()
{
    const [value, setValue] = useState("");
    const router = useRouter();

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = qs.stringifyUrl({
            url: '/search',
            query: {term:value}
        }, {skipEmptyString:true})
        router.push(url)
    }

    const onClear = () =>
    {
        setValue("");
    }
    return (
            <form onSubmit={onSubmit} className=" relative flex w-full lg:w-[400px] items-center" action="">
                <Input onChange={(e)=>{setValue(e.target.value)}} className=" rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-transparent" placeholder="Search"/>
                {
                    value && (
                        <X className=" absolute right-16 hover:opacity-70 cursor-pointer text-muted-foreground" onClick={onClear}/>
                    )
                }
                <Button variant={"secondary"} type="submit" className=" rounded-l-none">
                    <SearchIcon/>
                </Button>
            </form>
    )
}