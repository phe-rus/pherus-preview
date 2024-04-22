import Link from "next/link"
import { Theme } from "../theme/theme"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

export const Header = () => {
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


                        <Avatar className="size-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <Theme />
                    </nav>
                </div>
            </div>
        </header>
    )
}