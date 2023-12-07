import mongoose from "mongoose";
const tasksSchema = mongoose.Schema({
    title:{
        type:String,
        require:[true,"title is required"],
    },
    date:{
        type:String,
        require:[true,"date is required"],
    },
    finished:{
        type:Boolean,
        default:false
    }
}) 

const Tasks = mongoose.model('tasks',tasksSchema)

export default Tasks;