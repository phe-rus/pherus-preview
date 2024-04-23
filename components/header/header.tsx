"use client"

import Link from "next/link"
import { Theme } from "../theme/theme"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { useEffect, useState } from "react"

export const Header = () => {
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
  
    useEffect(() => {
      if (typeof window !== 'undefined' && window.localStorage) {
        var userDataString = localStorage.getItem('OauthData');
        if (userDataString) {
          try {
            var userData = JSON.parse(userDataString);  
            let { email, displayName, avatar } = userData;
  
            setName(displayName);
            setEmail(email);
            setAvatar(avatar);
          } catch (e) {
            console.log(`local data error : ${e}`);
          }
        }
      }
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="px-5 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold">Preview</span>
                    </Link>

                    <nav className="flex gap-6">
                    </nav>
                </div>


                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="size-8">
                                    <AvatarImage src={avatar} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel className="flex flex-row gap-2 items-center justify-center">
                                    <Avatar className="size-10">
                                        <AvatarImage src={avatar} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <a className="text-sm font-bold">{name}</a>
                                        <a className="text-[13px] font-light">{email}</a>
                                    </div>
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Theme />
                    </nav>
                </div>
            </div>
        </header>
    )
}