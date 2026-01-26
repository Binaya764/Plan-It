import express from "express";
import {getAllNotes, updateNote ,createNote, deleteNote} from "../contorllers/notesController.js"

const router = express.Router();

router.get("/",getAllNotes);
router.post("/",createNote); 
router.put("/:id",updateNote);
router.delete("/:id",deleteNote); 

export default router;

// app.get("/api/notes", (req,res)=>{
//     res.status(200).send("you got 20 notes");
// });
// app.post("/api/notes", (req,res)=>{
//     res.status(201).json({message: "Note created successfully!"});
// });
// app.put("/api/notes/:id", (req,res)=>{
//     res.status(200).send({message: "Note updated successfully!"});
// });
// app.delete("/api/notes/:id", (req,res)=>{
//     res.status(200).send({message: "Note deleted successfully!"});
// });