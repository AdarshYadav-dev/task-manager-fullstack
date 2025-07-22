const express = require("express")
const router = express.Router();
const {fetchAllTasks} = require("../Controllers/TaskController.js");
const {createTask} = require("../Controllers/TaskController.js");
const {updateTaskById} = require("../Controllers/TaskController.js");
const {deleteTaskById} = require("../Controllers/TaskController.js");

// to get all tasks !!
router.get('/' , fetchAllTasks);

// to create task 
router.post('/', createTask);

// to upload a task
router.put('/:id' ,updateTaskById )

// to delete task 
router.delete('/:id', deleteTaskById);


module.exports = router;