import Link from "next/link"
import { Theme } from "../theme/theme"

export const Header = () => {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold">Preview</span>
                    </Link>

                    <nav className="flex gap-6">
                    </nav>
                </div>


                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Theme />
                    </nav>
                </div>
            </div>
        </header>
    )
}