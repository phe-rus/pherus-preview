import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

export default function Deloy() {
    return (
        <section className="px-5 md:container flex flex-col gap-5 w-full h-full">
            <div className="md:container flex flex-col mt-10">
                <h2 className="text-3xl font-bold">Your about to deploy your project</h2>
                <p>Please follow the steps to configure your Project and deploy it.</p>
            </div>

            <div className="md:container grid grid-cols-1 md:grid-cols-12 gap-5 mb-20">
                <div className="flex flex-col gap-5 col-span-1 md:col-span-4">
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

                <div className="flex flex-col col-span-1 md:col-span-8 gap-5">
                    <Card className="flex flex-col col-span-1 md:col-span-7 w-full">
                        <CardHeader className="flex flex-col gap-3 w-full">
                            <h2 className="text-2xl font-bold">Import Git Respository</h2>

                            <div className="flex flex-col col-span-8 w-full gap-2">
                                <h2 className="text-md font-bold">Project Name</h2>
                                <Input
                                    placeholder="Name"
                                    className="flex w-full rounded-[5px]" />
                            </div>

                            <div className="flex flex-col w-full col-span-4 gap-2">
                                <h2 className="text-md font-bold">Framework Preset</h2>
                                <Select>
                                    <SelectTrigger className="w-full rounded-[5px]">
                                        <SelectValue placeholder="Framework" defaultValue="next.js" />
                                    </SelectTrigger>

                                    <SelectContent className="rounded-[5px]">
                                        <SelectItem className="rounded-[5px]" value="next.js">Next.js</SelectItem>
                                        <SelectItem className="rounded-[5px]" value="dark">Dark</SelectItem>
                                        <SelectItem className="rounded-[5px]" value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col col-span-8 w-full gap-2">
                                <h2 className="text-md font-bold">Root Directory</h2>
                                <Input
                                    placeholder="./"
                                    className="flex w-full rounded-[5px]" />
                            </div>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1" className="px-2 rounded-[5px] border h-fit">
                                    <AccordionTrigger className="no-underline">Build and Output Settings</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-3">
                                        <div className="flex flex-col col-span-8 w-full gap-2">
                                            <h2 className="text-sm font-bold">Build Command</h2>
                                            <Input
                                                placeholder="`npm run build` or `next build`"
                                                className="flex w-full rounded-[5px]" />
                                        </div>

                                        <div className="flex flex-col col-span-8 w-full gap-2">
                                            <h2 className="text-sm font-bold">Output Directory</h2>
                                            <Input
                                                placeholder="Next.js default"
                                                className="flex w-full rounded-[5px]" />
                                        </div>

                                        <div className="flex flex-col col-span-8 w-full gap-2">
                                            <h2 className="text-sm font-bold">Install Command</h2>
                                            <Input
                                                placeholder="`yarn install`,`pnpm install`,`npm install`, or `bun install`"
                                                className="flex w-full rounded-[5px]" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Button variant="outline" size="sm" className="rounded-[5px]">Deploy</Button>
                        </CardHeader>
                    </Card>

                    <Card className="flex flex-col col-span-1 md:col-span-7 w-full">
                        <CardHeader className="flex flex-col gap-3 w-full">
                            <h2 className="text-2xl font-bold">Deploy</h2>
                            <div className="w-full bg-accent h-[1px] rounded-full" />
                            <Accordion type="single" collapsible className="border rounded-[5px]">
                                <AccordionItem value="item-1" className="h-fit px-5">
                                    <AccordionTrigger className="no-underline">Building</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-3">

                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="h-fit px-5">
                                    <AccordionTrigger className="no-underline">Deployment Summary</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-3">
                                        
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="flex flex-row items-center justify-end">
                                <Button variant="outline" size="sm" className="rounded-[5px]">Cancel Deployment</Button>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </section>
    )
}