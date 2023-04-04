import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AddNote from "./AddNote";
import Note from "./NoteCard.js";
import { createNote } from "../../store/actions/notesAction";

const NotesList = ({ handleDeleteNote }) => {
    const [noteText, setNoteText] = useState('');
    const { name } = useParams();
    const folders = useSelector(state => state.folderDetails?.folders);

    const selectedFolder = folders.length > 0 && folders.filter((item) => item.name === name)[0];
    const notes = selectedFolder.notes;
    debugger;

    const dispatch = useDispatch();
    const handleAddNote = () => {
        dispatch(createNote({
            title: '1234',
            content: noteText,
            isFavourite: false,
            name: name
        }))
    }
    return (
        <div className="notes-list">
            {notes?.length > 0 && notes.map((notes) => (
                <Note id={notes.id}
                    text={notes.text}
                    date={notes.date}
                    handleDeleteNote={handleDeleteNote}

                />))}
            <AddNote noteText={noteText} setNoteText={setNoteText} handleAddNote={handleAddNote}
            />
        </div>
    )
}
export default NotesList;


