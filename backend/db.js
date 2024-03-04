const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Test123@cluster0.iss0jy6.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    Completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}