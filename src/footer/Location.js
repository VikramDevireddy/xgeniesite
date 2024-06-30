import React from 'react';
import './Location.css';
import Location_ from './location.jpg';

function Location() {
  return (
    <div>
      <div className="location_page_container d-flex flex-row justify-content-center"> 
        <div className="location_page_card">
            <h1 class="location_page_heading">X Genie Soft Training and Development</h1>
            <p className="location_page_heading">Adress :</p>
            <p className="location_page_details">16/1, 2nd floor, Sai Nilayam,</p>
            <p className="location_page_details"> Door No 6-16-18, Arundelpet,</p>
            <p className="location_page_details">Guntur, AndhraPradesh,</p>
            <p className="location_page_details">India, 522002</p>
        </div> 
        <div>
            <img src={Location_} className="location_page_img"></img>
        </div>   
       </div>
    </div>
  )
}

export default Location
