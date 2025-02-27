import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import './reviews.css'

const Review = (props) => {
    
  const [index, setIndex] = useState(props.coursename[0].id);
  const { id, name,image, text } = props.coursename[index];
  const checkNumber = (number) => {
    if (number >=props.coursename.length - 1) {
      return 0;
    }
    if (number < 0) {
      return props.coursename.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex=0;
  const maxIndex=props.coursename.length-1;

  
  const getRandomPerson=()=>{
    const getRandomIntInclusive=(min, max) =>{
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex===index){
      randomIndex=index+1
    }
    setIndex(checkNumber(randomIndex));

  }
  

  return (
    
    <article className="review">
     
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      {/* <p className="job">{job}</p> */}
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandomPerson}>Get Random Review</button>
    </article>
  );
};

export default Review;
