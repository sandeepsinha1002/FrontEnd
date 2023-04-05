import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import AddNote from "./AddNote";
import Navbar from "../Navbar/Navbar";
import {MdOutlineFeaturedPlayList ,MdOutlineTaskAlt} from 'react-icons/md';
import Translate from "./Translate";
import Note from "./NoteCard.js";
import '../../index2.css'
import { createNote, updateNote } from "../../store/actions/notesAction";


const NotesList = ({ handleDeleteNote }) => {
    const [noteText, setNoteText] = useState('');
    const { folderName } = useParams();
    const folders = useSelector(state => state.folderDetails?.folders);

    const selectedFolder = folders.length > 0 && folders.filter((item) => item.folderName === folderName)[0];
    debugger;
    const notes = selectedFolder.files;

    const dispatch = useDispatch();
    const handleAddNote = () => {
        dispatch(createNote({
            title: '1234',
            content: noteText,
            favourites: false,
            folderName: folderName
        }))
    }
    const handlleUpdateNote = () => {
        dispatch(updateNote({
            content: noteText
        }))
    }
    return (<>
    <div className="flex">
        <div className> 
            <Navbar/>
        </div>
        <div className="m-32">
        <div className='notes-container' >
            <div className='container'>
                <div className='notes-head'>
                    <MdOutlineTaskAlt size="1.9rem" style={{ color: '#3F497F' }} />
                    <h2 className="relative bottom-[16px]">My Notes</h2>
                </div>
                <div className="notes-list">
                        {notes?.length > 0 && notes.map(({ name, content, favourites, index, _id }) => (
                            <Note
                                key={_id}
                                folderName={folderName}
                                title={name}
                                content={content}
                                index={index}
                                favourites={favourites}
                                id={_id}
                            />))}
                    <AddNote
                        noteText={noteText}
                        setNoteText={setNoteText}
                        handleAddNote={handleAddNote}
                    />
                </div>


            </div>
            <div className='right'>
                <div className='notes-head1'>
                    <MdOutlineFeaturedPlayList size="1.9rem" style={{ color: '#3F497F' }} />
                    <h2 style={{ position:'relative',left:'5px',bottom:'16px'}}>Try Features</h2>
                </div>
                <Translate />
            </div>
        </div>
        </div>
        </div>
</>
    )
}
export default NotesList;


