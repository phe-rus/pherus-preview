// app/api/repos/router.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { accessToken, pramises, username } = await req.json(); // Added 'username' parameter
        const baseURL = 'https://api.github.com';

        const fetchGithub = async (endpoint: string) => {
            const res = await fetch(`${baseURL}${endpoint}`, {
                headers: {
                    Authorization: `token ${accessToken}`,
                },
            });

            if (!res.ok) {
                throw new Error(`An error occurred while fetching data from ${endpoint}`);
            }
            return res.json();
        };

        let data;

        if (pramises === "user_repo") {
            data = await fetchGithub(`/users/${username}/repos?type=all`);
        } else if (pramises === "org_repo") {
            data = await fetchGithub(`/orgs/${username}/repos?type=all`);
        } else if (pramises === "users") {
            const currentUser = await fetchGithub('/user');
            const orgs = await fetchGithub('/user/orgs');
            data = { currentUser, orgs };
        }

        return NextResponse.json({ data, message: 'Success', status: 200 });
    } catch (e) {
        return NextResponse.json({ message: `Error message: ${e}` }, { status: 500 });
    }
}
