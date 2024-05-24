import Note from "../models/notesModel.js";

export const writeNotes = async (req,res)=>{
    try {
        const{date,day,notes} = req.body
        const writerId = req.user._id;
        
        const newNotes = new Note({
            writerId,
            date,
            day,
            notes
        })
        
        await newNotes.save()

        res.status(201).json(newNotes)

    } catch (error) {
        console.log("error write notes controller")
        res.status(500).json({error:"Internal server error"})
    }
}




export const readNotes = async(req,res)=>{
    try {
        const readerId = req.user._id;

        const notes = await Note.find({writerId:readerId})

        if(!notes){
            return
        }
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error in notes controller:", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}