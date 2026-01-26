export function getAllNotes(req,res) {
    res.status(200).send("you just fetched the notes");
};

export function createNote(req,res){
   res.status(201).json({message: "Note created successfully!"});
 };

 export function updateNote(req,res){
     res.status(200).send({message: "Note updated successfully!"});
 };
export function deleteNote(req,res){
   res.status(200).send({message: "Note deleted successfully!"});
 };