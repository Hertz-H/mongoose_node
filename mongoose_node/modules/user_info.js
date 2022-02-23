const req = require('express/lib/request');
const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const user_info_Schema=new Schema({
    name:{type: String, unique: true},
    password:{type: String, unique: true},
    phone:{type: String, unique: true},
    email:{type: String, unique: true},

});
const user=mongoose.model("user",user_info_Schema);
module.exports=user;