import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minLength:4,
        maxLength:8,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

export const userModel= mongoose.model('users',userSchema);