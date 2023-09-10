import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import { useSession } from "next-auth/react";

export default async function testing (req : NextApiRequest, res : NextApiResponse) {
    if (req.method === "GET") {


        res.send("working")
    }
}
