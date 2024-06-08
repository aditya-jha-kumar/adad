import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requried: [true, "Please provide a username"],
        unique: true,
    },
    email:{
        type:String,

    }
});

const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User;