import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './ContentOffcanvas.css';
import Offcanvse_img from './Offcanvas_img.webp'
import { Link } from 'react-router-dom';

function ContentOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       
        <div>  
           
            <img  onClick={handleShow} src={Offcanvse_img} className="offcanvas_img" alt='content'/> 
           

            <Offcanvas show={show} onHide={handleClose} className="offcanvas_container">
              <Offcanvas.Header closeButton >
                <Offcanvas.Title className="offcanvas_header">XGENIE SOFT</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div class="offcanvas_page_details">
                  <ul id="canvas-ul">
              <li id='canvas-links'><Link id="link-tag-canvas" to='/'><span id='canvas-text'>home</span></Link></li>
             <li id='canvas-links'> <Link id="link-tag-canvas" to='/'><span id='canvas-text'>placements</span></Link> </li>
             <li id='canvas-links'> <Link id="link-tag-canvas" to='/'><span id='canvas-text'>career</span></Link> </li>
             <li id='canvas-links'> <Link id="link-tag-canvas" to='/'><span id='canvas-text'>about us</span></Link> </li>
             </ul>
              </div>



            
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          
           
       
          
            
    </>
  );
}

export default ContentOffcanvas;