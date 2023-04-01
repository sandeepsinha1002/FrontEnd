// import AddNote from "./AddNote";s
import Note from "./Note";


function NotesList({notes ,handleAddNote,handleDeleteNote}){

          return (
                    <div className="notes-list">
                              {notes.map((notes) =>(
                              <Note id={notes.id} 
                              text={notes.text} 
                              date={notes.date}
                              handleDeleteNote={handleDeleteNote}
                              />))}
                              
                    </div>
          )
}
export default NotesList;
