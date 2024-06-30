import React from 'react';
import './About.css';
import Xgenie1 from './Xgenie1.jpeg';
import Xgenie2 from './Xgenie2.jpeg';
import Xgenie3 from './Xgenie3.jpg';
import Xgenie4 from './Xgenie4.jpg';
import Xgenie5 from './Xgenie5.jpg';

function About() {
  return (
    <div>
      <div className="about_page_container">
        
        <h1 className="about_page_heading">About Us</h1>
        <hr className="about_page_lines"></hr>

        <p className="about_page_discription">XGENIE SOFT PVT LTD, is an India based Software Company that focuses on highly qualitative, timely delivered and cost-effective offshore software development. XGENIE SOFT PVT LTD helps clients harness the power of IT advances, for example, Health care, Travel domain, finance domain, Portals, Enterprise Mobility, Cloud computing and Analytics in a coordinated way to get much looked for after Enterprise - IT arrangements arrangement. XGENIE SOFT PVT LTD, with its innovative delivery framework offers Enterprises way to creating business value by outsourcing their business IT solutions.</p>
        <hr className="about_page_lines"></hr>
        <div className="d-flex flex-row justify-content-center">
        <img src={Xgenie1} height="200px"  width="250px" className="about_page_img"/>
        <img src={Xgenie2}  height="200px" width="250px" className="about_page_img"/>
        <img src={Xgenie3} height="200px"  width="250px" className="about_page_img"/>
        <img src={Xgenie4}  height="200px" width="250px" className="about_page_img"/>
        <img src={Xgenie5} height="200px"  width="250px" className="about_page_img"/>
        </div>

      </div>
    </div>
  )
}

export default About
