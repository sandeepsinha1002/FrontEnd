import React from 'react'
import { useNavigate } from 'react-router-dom';

const Folder = ({ note, index }) => {
  const navigate = useNavigate();
  return (
    <button
      type='button'
      onClick={() => navigate({
        pathname: `/folders/${note.name}`
      })
      } class="card min-w-[200px] mr-[20px]">
      <div>
        <h3 class="card-title">{note?.name}</h3>
      </div>
      <div class="card-link-wrapper">
        {/* <a href="" class="card-link" onClick={() => navigate('/title')}>Read more....</a> */}
      </div>
    </button>
  )
}

export default Folder;