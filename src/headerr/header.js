import React from 'react'
import {Link} from 'react-router-dom';
import "./header.css"
import ContentOffcanvas from './ContentOffcanvas';
import logo from "./logo.png"
import Navbar from 'react-bootstrap/Navbar';
import { useEffect,useState } from 'react';

function Header() {
//   const [sticky,setSticky]=useState(false)
//   useEffect(()=>{
//     const handlescroll=()=>{
//     setSticky(window.scrollY>200);
//     console.log(window.scrollY)
//   };
//   window.addEventListener("scroll",handlescroll);
//   return ()=>window.removeEventListener("scroll",handlescroll)
//   });

  return (
    <div>

        <div className='header-links-div'>
             <img id='logo-image' alt='logoimg' src={logo}></img>
            <ul className='unordered-list-header'>
            <li id='header-links'><Link id="link-tag-header" to='/'><span id='header-text'>home</span></Link></li>
             <li id='header-links'> <a id="link-tag-header" href='#courses_list'><span id='header-text'>placements</span></a> </li>
             <li id='header-links'> <a id="link-tag-header" href=''><span id='header-text'>career</span></a> </li>
             <li id='header-links'> <a id="link-tag-header" href=''><span id='header-text'>about us</span></a> </li>
             <li id='header-links'> <a id="link-tag-header" href=''><span id='header-text'>contact us</span></a> </li>

            </ul>
             <div id='header-canvas'><ContentOffcanvas></ContentOffcanvas></div>

           

        </div>
    </div>
  )
}

export default Header