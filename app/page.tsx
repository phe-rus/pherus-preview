"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GitBranch, LucideGithub, MoreHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Header } from "@/components/header/header"

export default function Home() {
  const [selectTabs, setTabs] = useState("Overview")

  const tabs = [
    {
      name: "Overview",
    },
    {
      name: "Activity",
    },
    {
      name: "Domains",
    },
    {
      name: "Usage",
    },
    {
      name: "Settings",
    }
  ]

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
    {
      name: "Project Name"
    },
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
        <Tabs defaultValue={selectTabs} className="flex flex-col gap-5 w-full h-full my-10">
          <div className="flex flex-row justify-between">
            <TabsList className="bg-transparent">
              {tabs.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.name}
                  onClick={() => setTabs(item.name)}
                  className={`bg-transparent font-bold rounded-none ${selectTabs.includes(item.name) ? ("border-b-[2px] border-violet-500") : ("")} shadow-none`}>
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex flex-row">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="sm" className="rounded-full">Add New</Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/projects" className="w-full h-full">
                      Project
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Domain</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div>
            <Input
              placeholder="search" />
          </div>
          <TabsContent value="Overview">
            <section className="flex flex-col w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {projects.map((item, index) => (
                  <Card key={index} className="flex flex-col w-full">
                    <CardHeader className="flex flex-row justify-between p-2">
                      <div className="flex flex-row gap-2">
                        <Avatar className="size-8">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                          <h2 className="text-[11px] font-bold">Pherus</h2>
                          <h2 className="text-[10px]">pherus.domain.com</h2>
                        </div>
                      </div>

                      <div className="flex flex-row gap-2">
                        <MoreHorizontal className="h-5" />
                      </div>
                    </CardHeader>

                    <CardContent className="p-2">
                      <Button variant="outline" size="sm" className="flex flex-row h-fit p-[6px] gap-2 rounded-full text-[10px] font-light">
                        <LucideGithub className="h-3 w-3" />
                        la-niina/pherus-official
                      </Button>
                    </CardContent>

                    <CardFooter className="flex flex-col items-start justify-start w-full p-2">
                      <h3 className="text-sm font-light">int</h3>
                      <div className="flex flex-row gap-2 items-center">
                        <h3 className="text-sm font-light">9d</h3>
                        <h3 className="text-sm font-light">ago on</h3>
                        <GitBranch className="h-3 w-3 stroke-violet-500" />
                        <h3 className="text-sm font-black">main</h3>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="Domains">Change your password here.</TabsContent>
        </Tabs>
      </section>
  )
}