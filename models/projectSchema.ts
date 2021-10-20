import mongoose from 'mongoose'


const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    link: String,
    photo: String
    }
)

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema)
