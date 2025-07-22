const express = require("express");
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors');



app.use(cors());

// folder path for frontend technology
app.use(express.static(path.join(__dirname, '..', 'Frontend')));

app.get('/', function(req, res, next){
    res.send("Hello server is working now!!")
})

app.use(bodyParser.json());
app.use('/tasks', TaskRouter )

app.listen(PORT,()=>{
    console.log(`Server is running on PORT = ${PORT}`);
});
