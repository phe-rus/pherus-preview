"use client"

import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { auth } from "@/lib/fconfig";
import { GithubAuthProvider, signInWithPopup } from "@firebase/auth";
import Image from "next/image";
import { Progress } from "../ui/progress";
import { Header } from "../header/header";

interface AuthenticationProps {
    children: ReactNode;
}

export const Authentication = ({ children }: AuthenticationProps) => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    const [currentUser, setCurrentUser] = useState<boolean>(false);

    async function githubAuthen() {
        const provider = new GithubAuthProvider();
        provider.addScope('repo');
        provider.addScope('read:user')
        provider.addScope('repo:status')
        provider.addScope('read:org')
        provider.setCustomParameters({
            'allow_signup': 'false'
        });
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;

            const user = result.user;

            console.log(`${user}  ${token}`)
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(
                    'OauthData',
                    JSON.stringify({
                        email: user.email,
                        displayName: user.displayName,
                        uid: user.uid,
                        avatar: user.photoURL,
                        token: token,
                    })
                );
            }

            setCurrentUser(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const userDataString = localStorage.getItem('OauthData');
            if (userDataString && userDataString.trim() !== '') {
                const interval = setInterval(() => {
                    setLoadingPercentage(prevPercentage => {
                        const newPercentage = prevPercentage + 10;
                        return newPercentage >= 100 ? 100 : newPercentage;
                    });
                }, 500);

                setTimeout(() => {
                    setCurrentUser(true);
                    clearInterval(interval);
                    setLoadingPercentage(100);
                }, 3000);

            } else {
                setCurrentUser(false);
            }
        }
    }, [])

    return (
        <div className="flex-1">
            {
                currentUser ? (
                    <section className="flex flex-col w-sreen" >
                        <Header />
                        {children}
                    </section >
                ) : (
                    <section className="flex flex-col w-full h-screen items-center justify-center">
                        <div className="flex flex-col gap-10 justify-center items-center">
                            <Button variant="secondary" className="flex flex-row gap-3 size-[129px] z-[50] rounded-full zigzag"
                                onClick={() => {
                                    currentUser ? (
                                        ""
                                    ) : (
                                        githubAuthen()
                                    )
                                }}>
                                {
                                    loadingPercentage > 1 ? (
                                        <Image
                                            alt="alt"
                                            src="/logo.png"
                                            width={1000}
                                            height={1000}
                                            className="h-20 w-20" />
                                    ) : (
                                        <GitHubLogoIcon className="h-20 w-20" />
                                    )
                                }

                            </Button>
                            <Progress value={loadingPercentage} className="border-dashed dark:bg-black/40 z-[50]" />
                        </div>
                    </section>
                )
            }
        </div>
    );

};