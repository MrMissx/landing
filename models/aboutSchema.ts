import mongoose from "mongoose"

const AboutSchema = new mongoose.Schema({
    _id: Number,
    content: [String]
})

export default mongoose.models.About || mongoose.model("About", AboutSchema)
