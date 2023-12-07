import express from "express";
import mongoose from  "mongoose";
import Tasks from "./models/tasksModel.js";
const app = express();

const port = 3000;
app.use(express.json());


app.get('/',async(req,res)=>{
    const tasks=await Tasks.find()
    res.status(200).json(tasks);
})

app.post("/",async(req,res)=>{
    const {title, date, isFinished}=req.body

    const task = new Tasks({
        title,date,isFinished
    });
    const newTask = await task.save();
    res.status(201).json(newTask);
})

app.put("/:id",async(req,res)=>{
    const {title, date, isFinished}=req.body

    const task = await Tasks.findById(req.params.id)
    if(task){
        task.title=title
        task.date=date
        task.isFinished-isFinished

        const updatedTask = await task.save();
        res.json(updatedTask)
    }
})
app.delete("/:id",async(req,res)=>{
    const task=await Tasks.findByIdAndDelete(req.params.id)
    res.json({message:"task deleted!"})
})

 app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
 })

 mongoose.connect("mongodb+srv://ciiflecadde07:ciiflecadde07@ecommerce.vxo1x9m.mongodb.net/users?retryWrites=true&w=majority")
.then(()=>{
    console.log('connect to the db');
}).catch((e)=>{
    console.log(e);
})
