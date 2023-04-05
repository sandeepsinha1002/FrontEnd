import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './card.css';
import Folder from './Folder';
import { storeApiResp } from '../../store/actions/notesAction';


const Folders = () => {
    const dispatch = useDispatch();
    const folderList = useSelector(state => state.folderDetails);

    useEffect(() => {
        const getNotes = async () => {
            // replace this url by actual URL
            fetch('./data.json').then(
                function (res) {
                    return res.json();
                },
            ).then((data) => {
                // store Data in State Data Variable
                dispatch(storeApiResp(data?.notes));
            }).catch((err) => {
                console.log(err, ' error');

            });
        };
        getNotes();
    }, []);

    return (
        <div class="px-[30px] py-[20px] relative">
            <h2 className='mb-5'>NOTES🗒️</h2>
            <div className="flex max-w-[50%] overflow-x-auto">
                {folderList?.folders?.length > 0 && folderList.folders.map((note, index) => (
                    <Folder
                        key={index}
                        note={note}
                        index={index}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Folders;



// <div className='section'>
                    //          <div class="card"> 
                    //                     <h3 class="card__title">{props.title} 
                    //                     </h3>
                    //                     <p className='card_desc'>
                    //                         {props.desc}</p>
                    //                     <img className='relative flex justify-end rounded-[0.75rem] max-w-full' src={props.img} alt="" />        
                    //                     <button className='flex'onClick={()=>navigate('/title')}>more..</button>
                    //           </div>

                    // </div>