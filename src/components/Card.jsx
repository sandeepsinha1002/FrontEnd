import React from 'react'
import './card.css';
import { useNavigate } from 'react-router-dom';
import { BsArrowBarLeft } from 'react-icons/bs';
import CardItem from './CardItem';

function Card (props){
    const navigate=useNavigate();
          return (
          <div class="container" >
                <h2>NOTES🗒️</h2>
                <ul class="cards">
                    <CardItem title="To Do List" desc="Planning a dribble porject on Wednesday" />
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                    <CardItem/>
                   
                    </ul>
                    </div>
            )
}

export default Card;


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