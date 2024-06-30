import './coursedisplay.css'
import logo from    "./crsimg_1.jpg" 
import { useState,setState } from 'react';
import {FaDotCircle} from 'react-icons/fa';
import Review from '../reviews/reviews';



function Eachcourse(props){
    const [lesson_count,setLesson_count]=useState(0);
    const incrementor=()=>{
        setLesson_count(lesson_count+1)
    };
return(
    <div>
    <div className="coursedisplay_page" >
        <img  className='cdimg' src={logo}></img>
<h1 className='text'>{props.coursei.heading}</h1>
<div className='courceinfo'>
<p className='text1'>{props.coursei.cource_info}</p>
</div>
{/* <p>{props.coursei.Cource_}</p> */}


{/* <h2>{props.coursei.cource_duration}</h2> */}




    </div>
    <div id="coursepage-navbar">
     <ul className='courses-nav'>
            <li id='header-links'><a id="link-tag-header" to='/'><span id='header-text'>about course</span></a></li>
             <li id='header-links'> <a id="link-tag-header" href='#course-outline'><span id='header-text'>course outline</span></a> </li>
             <li id='header-links'> <a id="link-tag-header" href=''><span id='header-text'>outcomes</span></a> </li>
             <li id='header-links'> <a id="link-tag-header" href=''><span id='header-text'>certification</span></a> </li>
             <li id='header-links'> <a id="link-tag-header" href='#reviews'><span id='header-text'>reviews</span></a> </li>

            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
      

            <div id="course-outline">
                <h1 id="outline-heading">{props.coursei.heading} OUTLINE:</h1>
                <h3>topics that are covered in this course are:</h3>
                <div id='lessons-map'>
            {props.coursei.lessons.map((Eachlesson)=>
        //    {setLesson_count(lesson_count+1)}

                <h5 id="each-lesson"><FaDotCircle />  {Eachlesson}</h5>
                // ,incrementor()
            )}
</div>
            </div>  
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
         



<div>
    <h1 id="main_heading">APPRECIATION</h1>
    <p id="appreciation_text">It’s your dedication that contributed to our success. Thank you for inspiring us!<br></br><br></br>

Every idea shared and every opportunity seized by you helped us achieve the heights. Kudos to your efforts!<br></br><br></br>

Your dedication is imperative for the growth of our company. Thank you for your efforts.<br></br><br></br>

You probably haven't thought of anyone noticing you staying back late at the office. Well, you missed me out. Thank you for your efforts. Yours sincerely,......<br></br><br></br>

A good employee inspires his or her boss. Thanks for being my inspiration.<br></br><br></br>

An employee’s hard work is the fuel to great company culture. Thanks for adding extra miles to ours.<br></br><br></br>

A perfect employee is not the one who comes early and leaves late. It is someone who dedicates themselves to their work wholeheartedly. Kudos to your dedication!<br></br><br></br>

Your attention to detail at work makes you more unique. Keep up the good work.</p>
</div>
<div>
    <h1>BENIFITS of {props.coursei.heading}</h1><br></br>
    <h5>{props.coursei.benefits}</h5><br></br>
</div>
<div >
    <h1>Reviews on {props.coursei.heading} course</h1>
          <Review coursename={props.coursei.creviews}/>
          </div>
    </div>
    
    
    

)
}
export default Eachcourse