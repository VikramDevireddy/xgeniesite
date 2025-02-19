import React from 'react'
import img1 from './image1.jpg'
import './card-style.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card text-center shadow'>
        <div className='overflow'>
            <img src={props.imgsrc} alt='image 1' className='card-img-top'/>

        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>
               {props.title}
            </h4>
            <p className='card-text text-secondary'>
                {props.info}
            </p>
            <Link to={props.title} className='btn btn-outline-primary' target="_blank">check this course</Link>

        </div>

    </div>
  )
}

export default Card