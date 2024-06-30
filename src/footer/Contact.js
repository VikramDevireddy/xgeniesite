import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
      <div className="contact_us_page_container">
        
        <h1 className="contact_us_page_heading">Reach Me Today</h1>
        <p className="contact_us_page_discription">I'm Keen On Talking About Anything With You.</p>
        <hr className="contact_us_page_line"></hr>
          
        <div className="d-flex flex-row justify-content-center">
          <div className="contact_us_page_details_card">
            <h6 className="contact_us_page_details">Email</h6>
            <p className="contact_us_page_details_2">training@xgeniesoft.com.</p>
          </div> 
          <div className="contact_us_page_details_card">
            <h6 className="contact_us_page_details">Phone No</h6>
            <p className="contact_us_page_details_2"> 9014501468</p>
          </div>
        </div>  
        <hr className="contact_us_page_line"></hr>
        <h1 className="contact_us_page_heading">XGENIE SOFT</h1>

      </div>
      </div>
    </div>
  )
}

export default Contact
