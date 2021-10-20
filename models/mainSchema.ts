import mongoose from 'mongoose'


const mainSchema = new mongoose.Schema({
    _id: Number,
    image: String,
    about: String
})

export default mongoose.models.Main || mongoose.model("Main", mainSchema)
