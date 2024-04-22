import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

export default function Deloy() {
    return (
        <section className="px-5 md:container flex flex-col gap-5 w-full h-full">
            <div className="flex flex-col mt-10">
                <h2 className="text-3xl font-bold">Your about to deploy your project</h2>
                <p>Please follow the steps to configure your Project and deploy it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <div className="flex flex-col gap-5 col-span-1 md:col-span-3">
                    <Card>
                        <CardContent>
                            <Image
                                alt="alt"
                                src="/vercel.svg"
                                width={1000}
                                height={1000}
                                className="w-full h-[150px] object-contain hover:next:flex" />
                        </CardContent>

                        <CardFooter className="flex flex-col items-start justify-center bg-muted/20 p-3">
                            <h2>Next Js</h2>
                            <p>
                                A Next.js app and a Serverless Function API.
                            </p>
                        </CardFooter>
                    </Card>

                    <div className="flex flex-col w-full">
                        <ul className="flex flex-col gap-2 border-l-[3px] p-3">
                            <li>Create Git Repository</li>
                            <li>Deploy</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col col-span-1 md:col-span-9 gap-5">
                    <Card className="flex flex-col col-span-1 md:col-span-7 w-full">
                        <CardHeader className="flex flex-col gap-3 w-full">
                            <h2 className="text-2xl font-bold">Import Git Respository</h2>
                            <div className="grid grid-cols-12 gap-2 w-full">
                                <div className="flex flex-col w-full col-span-4 gap-2">
                                    <h2 className="text-md font-bold">Project Name</h2>
                                    <Select>
                                        <SelectTrigger className="w-full rounded-[5px]">
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>

                                        <SelectContent className="rounded-[5px]">
                                            <SelectItem className="rounded-[5px]" value="light">Light</SelectItem>
                                            <SelectItem className="rounded-[5px]" value="dark">Dark</SelectItem>
                                            <SelectItem className="rounded-[5px]" value="system">System</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex flex-col col-span-8 w-full gap-2">
                                    <h2 className="text-md font-bold">Project Name</h2>
                                    <Input
                                        placeholder="search repo"
                                        className="flex w-full rounded-[5px]" />
                                </div>
                            </div>

                        </CardHeader>
                    </Card>

                    <Card className="flex flex-col col-span-1 md:col-span-7 w-full">
                        <CardHeader className="flex flex-col gap-3 w-full">
                            <h2 className="text-2xl font-bold">Deploy</h2>
                            <div className="w-full bg-accent h-[1px] rounded-full" />
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
                    </Card>
                </div>
            </div>
        </section>
    )
}