import mongoose from 'mongoose'


const Projects = new mongoose.Schema({
    name: String,
    description: String,
    link: String,
    photo: String
    }
)

export default mongoose.model("Project", Projects)
