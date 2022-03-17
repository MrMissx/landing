import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../models";
import projectSchema from "../../models/projectSchema";
import { verifyAuth } from "../../models/checkCreds";

async function updateDB(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (!verifyAuth) return;

    await dbConnect();
    projectSchema.findOneAndUpdate(
        { name: req.body.name },
        { $set: req.body.data },
        (err: Error, data: any) => {
            if (err) {
                res.status(500).json({ status: "ERROR", message: err.message });
            } else {
                res.status(200).json({
                    status: "OK",
                    message: "successfuly updated",
                    data: data,
                });
            }
        }
    );
}

async function insertDB(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (!verifyAuth) return;

    await dbConnect();
    const newProject = new projectSchema(req.body);
    newProject.save((err: Error, data: any) => {
        if (err) {
            res.status(500).json({ status: "ERROR", message: err.message });
        } else {
            res.status(200).json({
                status: "OK",
                message: "successfuly added",
                data: data,
            });
        }
    });
}

async function deleteDB(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (!verifyAuth) return;

    await dbConnect();
    projectSchema.findOneAndDelete(req.body, (err: Error, data: any) => {
        if (err) {
            res.status(500).json({ status: "ERROR", message: err.message });
        } else {
            if (data === null) {
                res.status(202).json({
                    status: "OK",
                    message: "No data found",
                });
            } else {
                res.status(200).json({
                    status: "OK",
                    message: "Successfuly deleted",
                    data: data,
                });
            }
        }
    });
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    const { method } = req;

    switch (method) {
        case "POST":
            await updateDB(req, res);
            return;
        case "PUT":
            await insertDB(req, res);
            return;
        case "DELETE":
            await deleteDB(req, res);
            return;
        default:
            res.redirect("/");
            return;
    }
}
