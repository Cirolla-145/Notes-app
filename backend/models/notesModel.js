import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    writerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    date:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    }
},
    {timestamps:true}
)

const Note = mongoose.model("Note",notesSchema)

export default Note