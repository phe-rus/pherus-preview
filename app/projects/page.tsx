"use client"

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
import { useEffect, useMemo, useState } from "react";

interface Repository {
    name: string;
    description: string;
    language: string;
    updated_at: string;
    clone_url: string;
    owner: {
        login: string;
    };
}

interface User {
    login: string;
    type: string;
}

interface Organization {
    login: string;
    type: string;
}

interface ResponseData {
    currentUser: User;
    orgs: Organization[];
}

export default function Projects() {
    var [accessToken, setToken] = useState<string | undefined>(undefined)
    var [repositories, setRepositories] = useState<Repository[]>([]);
    var [usersAndOrgs, setUsersAndOrgs] = useState<(User | Organization)[]>([]);

    var [usersName, setUserName] = useState("")

    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            var userDataString = localStorage.getItem('OauthData');
            if (userDataString) {
                try {
                    var userData = JSON.parse(userDataString);
                    let { token } = userData;
                    fetchCurrentUser(token)
                } catch (e) {
                    console.log(`local data error : ${e}`);
                }
            }
        }
    }, []);

    async function fetchCurrentUser(accessToken: string) {
        try {
            setToken(accessToken)
            const response = await fetch('/api/repos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accessToken: accessToken,
                    pramises: 'users'
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const responseData = await response.json();
            const { currentUser, orgs } = responseData.data;

            setUsersAndOrgs([currentUser, ...orgs]);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchData(selectedOption: string, username: string) {
        try {
            console.log(`pramises ${selectedOption}  token ${accessToken}`)
            const response = await fetch('/api/repos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accessToken: accessToken,
                    pramises: selectedOption,
                    username: username
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData.data)
            setRepositories(responseData.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleOptionChange = (indexed: number) => {
        let options: string;
        let username: string;
        if (usersAndOrgs[indexed].type !== "") {
            options = "user_repo"
            username = usersAndOrgs[indexed].login
            setUserName(usersAndOrgs[indexed].login)
        } else {
            options = "org_repo"
            username = usersAndOrgs[indexed].login
        }

        fetchData(options, username)
    };

    const filteredRepositories = useMemo(() => {
        return repositories.filter(repo =>
            repo.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            repo.name.toLowerCase() !== '.github' &&
            repo.name.toLowerCase() !== usersName.toLowerCase() &&
            ['javascript', 'typescript'].includes(repo.language?.toLowerCase())
        );
    }, [repositories, searchQuery, usersName]);

    const projects = [
        {
            name: "Shadcn ui",
            image: "/templates/shadcn-template.png",
            description: "A Next.js 13 template for building apps with Radix UI and Tailwind CSS."
        }
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
                            <Select onValueChange={(u) => handleOptionChange(parseInt(u as string, 10))}>
                                <SelectTrigger className="w-full col-span-4 rounded-[5px]">
                                    <SelectValue placeholder="Repositories" />
                                </SelectTrigger>

                                <SelectContent className="rounded-[5px]">
                                    {usersAndOrgs.map((item, index) => (
                                        <SelectItem
                                            key={index}
                                            className="rounded-[5px]"
                                            value={`${index}`}
                                        >
                                            {item?.login}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>


                            <Input
                                placeholder="search repo"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex col-span-8 w-full rounded-[5px]" />
                        </div>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-3">
                        {filteredRepositories?.map((item, index) => (
                            <Card key={index} className="flex flex-col bg-muted/30">
                                <CardContent className="flex flex-row justify-between p-5 items-center">
                                    <div className="flex flex-row gap-3 items-center">

                                        <Avatar className="size-8">
                                            <AvatarImage src={`${!item.language.includes("typescript") ? ("/languages/typescript.png") : ("/languages/javascript.png")}`} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <h2 className="text-sm font-bold">{item.name}</h2>
                                        <LockIcon className="h3 w-3" />
                                        <DotIcon />
                                        <span className="text-sm font-light">2d ago</span>
                                    </div>

                                    <div>
                                        <Button variant="default" size="sm" className="rounded-full">deploy</Button>
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
                                <Card key={index} className="rounded-[20px]">
                                    <CardContent className="relative w-full p-0">
                                        <Image
                                            alt={item.name}
                                            src={item.image}
                                            width={1000}
                                            height={1000}
                                            className="w-full h-[150px] object-fit hover:next:flex rounded-lg" />

                                        <Button id="next" variant="secondary" size="icon" className="absolute hidden right-3 rounded-full">
                                            <ArrowUpRightFromCircle />
                                        </Button>
                                    </CardContent>

                                    <CardFooter className="flex flex-col items-start justify-center p-3">
                                        <h2>{item.name}</h2>
                                        <p className="text-[10px] font-light">{item.description}</p>
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