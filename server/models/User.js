import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:30,
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:40,
    },
    password:{
        type:String,
        required:true,
        min:5,
        
    },
    picturePath:{
        type:String,
        default:"",
    },
    friend:{
        type:Array,
        default:[],
    },location:String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number,
},{timestamps:true}
)
const User=mongoose.model("User",UserSchema)
export default User;