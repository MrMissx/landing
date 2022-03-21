import crypto from "crypto";

import { NextApiRequest, NextApiResponse } from "next";

const token: string = process.env.AUTH_TOKEN!;

if (!token) {
    throw new Error(
        "Please define a AUTH_TOKEN environment variable on .env.local"
    );
}

const bearer: string = sha256Hash(token);

function sha256Hash(str: string): string {
    return crypto.createHash("sha256").update(str).digest("hex");
}

export function verifyAuth(req: NextApiRequest, res: NextApiResponse, respond: boolean = true): boolean {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ");
            return sha256Hash(token[1]) === bearer;
        }
    } catch (error) {
        res.status(401).json({ status: "ERROR", message: "Unauthorized" });
        return false;
    }
    if(respond){
        res.status(401).json({ status: "ERROR", message: "Unauthorized" });
    }
    return false;
}
