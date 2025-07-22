const TaskModel = require("../Models/taskmodel");

// this function is used to created tasks 
const createTask = async(req, res) =>{
    const data = req.body;

    try{
        const model  = new TaskModel(data)
        await model.save();
        res.status(201)
        .json({message : "Task is created", sucess : true })
    }catch(err){
        res.status(500).json({message : "failed to create task", sucess : false});
    }
}

//  this function is used to fetch all tasks
const fetchAllTasks = async(req, res) =>{

    try{
        const data  = await TaskModel.find({})
        res.status(200)
        .json({message : "All The Task", sucess : true , data })
    }catch(err){
        res.status(500).json({message : "failed to get all  task", sucess : false});
    }
}

// this function is used to update a single task 

const updateTaskById = async(req, res) =>{

    try{    

        const id = req.params.id;
        const body = req.body;
        const obj = {$set : {...body}} ;
        await TaskModel.findByIdAndUpdate(id,obj)
        res.status(200)
        .json({message : "Task Updated", sucess : true})
    }catch(err){
        res.status(500).json({message : "failed to update task", sucess : false});
    }
}


// this funciton is used to delete a single task !!
const deleteTaskById = async(req, res) =>{

    try{    

        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200)
        .json({message : "Task Deleted", sucess : true})
    }catch(err){
        res.status(500).json({message : "failed to delete task", sucess : false});
    }
}



module.exports = {
    createTask,
    fetchAllTasks,
    deleteTaskById,
    updateTaskById 
}