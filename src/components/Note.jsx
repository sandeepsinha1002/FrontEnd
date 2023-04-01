import {MdDeleteForever} from 'react-icons/md';

function Note({id,text,date,handleDeleteNote}){
          return(
                    <div className="note">
                              <span>{text}</span>
                              <div className="note-footer">
                                        <strong>{date}</strong>
                                        <MdDeleteForever className='delete-icon'size='1.9em' onClick={()=>handleDeleteNote(id)}/>
                              </div>
                    </div>
          )
}

export default Note;