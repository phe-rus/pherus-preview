import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ArrowUpRightFromCircle, DotIcon, LockIcon } from "lucide-react";
import Image from "next/image";


export default function Projects() {
    const projects = [
        {
            name: "Project Name"
        },
        {
            name: "Project Name"
        },
        {
            name: "Project Name"
        },
    ]
    return (
        <section className="px-5 md:container flex flex-col gap-5 w-full h-full">
            <div className="flex flex-col w-fit mt-10">
                <h2 className="text-4xl font-bold">Let&apos;s deploy something new.</h2>
                <p>To deploy a new Project, import an existing Git Repository or get started with one of our Templates.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
                <Card className="flex flex-col col-span-1 md:col-span-7 w-full">
                    <CardHeader className="flex flex-col gap-3 w-full">
                        <h2 className="text-2xl font-bold">Import Git Respository</h2>
                        <div className="grid grid-cols-12 gap-2 w-full">
                            <Select>
                                <SelectTrigger className="w-full col-span-4 rounded-[5px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent className="rounded-[5px]">
                                    <SelectItem className="rounded-[5px]" value="light">Light</SelectItem>
                                    <SelectItem className="rounded-[5px]" value="dark">Dark</SelectItem>
                                    <SelectItem className="rounded-[5px]" value="system">System</SelectItem>
                                </SelectContent>
                            </Select>

                            <Input
                                placeholder="search repo"
                                className="flex col-span-8 w-full rounded-[5px]" />
                        </div>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-3">
                        {projects.map((item, index) => (
                            <Card key={index} className="flex flex-col bg-muted/30">
                                <CardContent className="flex flex-row justify-between p-5 items-center">
                                    <div className="flex flex-row gap-3 items-center">
                                        <Avatar className="size-8">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <h2 className="text-sm font-bold">pherus-official</h2>
                                        <LockIcon className="h3 w-3" />
                                        <DotIcon />
                                        <span className="text-sm font-light">2d ago</span>
                                    </div>

                                    <div>
                                        <Button variant="default" size="sm" className="rounded-[5px]">Import</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>

                <Card className="flex flex-col col-span-1 md:col-span-5 w-full">
                    <CardHeader className="flex flex-col gap-3 w-full">
                        <h2 className="text-2xl font-bold">Clone Templete</h2>
                    </CardHeader>

                    <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                            {projects.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="relative w-full">
                                        <Image
                                            alt={item.name}
                                            src="/vercel.svg"
                                            width={1000}
                                            height={1000}
                                            className="w-full h-[150px] object-contain hover:next:flex" />

                                        <Button id="next" variant="secondary" size="icon" className="absolute hidden right-3 rounded-full">
                                            <ArrowUpRightFromCircle />
                                        </Button>
                                    </CardContent>

                                    <CardFooter className="flex flex-col items-start justify-center bg-muted/20 p-3">
                                        <h2>Next Js</h2>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}