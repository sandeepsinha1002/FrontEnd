import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardItem = (props) => {
  const navigate=useNavigate();
  return (
    <li class="card">
                    <div>
                        <h3 class="card-title">{props.title}</h3>
                        <div class="card-content">{props.desc}</div>
                        <img src={props.img} alt="" />
                    </div>
                    <div class="card-link-wrapper">
                        <a href="" class="card-link" onClick={()=>navigate('/title')}>Read more....</a>
                    </div>
                    </li>
  )
}

export default CardItem;