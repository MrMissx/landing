import mongoose from 'mongoose'

const mongoURI: string = process.env.MONGODB_URI!

if (!mongoURI){
    throw new Error("Please define a MONGODB_URI environment variable on .env.local");
}


export default async function dbConnect() {
    return await mongoose.connect(mongoURI)
}