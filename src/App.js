import Header from './headerr/header';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cads from './courses/Cads';
import UncontrolledExample from './homepage/homepage';
// import Backend from './Backend';
import Eachcourse from './coursedisplaypage/coursedisplay';
import Review from './reviews/reviews';
import Footer_section1 from 'D:/dcoderz_project/dcoderz/src/footer/Footer_section1';
import Footer_TC from 'D:/dcoderz_project/dcoderz/src/footer/Footer_TC';
import Footer_TMP from 'D:/dcoderz_project/dcoderz/src/footer/Footer_TMP';
import Footer_TPGP from 'D:/dcoderz_project/dcoderz/src/footer/Footer_TPGP';
import Footer_TR from 'D:/dcoderz_project/dcoderz/src/footer/Footer_TR';


function App() {
     const courses=[{    
    cource_title:"frontend",
    Cource_:"A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.",
    cource_duration:"6Months",
    heading:"FRONT END DEVELOPMENT COURSE",
    benefits:"Front End Development Skill is ideal for good user experience and website design. Read the blog to know the benefits and disadvantages. Front End Development Skill is ideal for good user experience and website design. Read the blog to know the benefits and disadvantages of this technology in detail. Front-end development is a process that involves the creation of a graphical user interface for a website or an application. It is a pathway for developers to interact with users directly. Moreover, front-end development is the practice of producing CSS, JavaScript, and HTML for a website.",
    cource_info:"A front-end developer builds the front-end portion of websites and web applications—that is, the part that users actually see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.",
    // cource_img:img1
    lessons:["html","css","js","react","git"],
    creviews:[
{
id:1,
name:'prakash',
image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
text:
	"People here are very much supportive, and treat you like a family member. You will come to learn professional behaviour because everyone here is so much disciplined and professional. You will also have many learning resources like Udemy, etc. I will 100% recommend this company who want to learn and enjoy great work culture",
},
{

id:2,
name:'Sumanth',
image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
text:
	"They are hired for this innovator profile from tier -1 clg like IIT, NIT, IIIT. When you are selected , according to your profile/ resume mostly they are assigned into the related project.",
},

 

{
id:3,
name:'Dileep',
image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
text:
	"Get good knowledge on different projects",
}
]


},
{    
    cource_title:"frontend",
    Cource_:"A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.",
    cource_duration:"6Months",
    heading:"FRONT END DEVELOPMENT COURSE",
    benefits:"Front End Development Skill is ideal for good user experience and website design. Read the blog to know the benefits and disadvantages. Front End Development Skill is ideal for good user experience and website design. Read the blog to know the benefits and disadvantages of this technology in detail. Front-end development is a process that involves the creation of a graphical user interface for a website or an application. It is a pathway for developers to interact with users directly. Moreover, front-end development is the practice of producing CSS, JavaScript, and HTML for a website.",
    cource_info:"A front-end developer builds the front-end portion of websites and web applications—that is, the part that users actually see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.",
    // cource_img:img1
    lessons:["html","css","js","react","git"],
    creviews:[
{
id:1,
name:'prakash',
image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
text:
	"People here are very much supportive, and treat you like a family member. You will come to learn professional behaviour because everyone here is so much disciplined and professional. You will also have many learning resources like Udemy, etc. I will 100% recommend this company who want to learn and enjoy great work culture",
},
{

id:2,
name:'Sumanth',
image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
text:
	"They are hired for this innovator profile from tier -1 clg like IIT, NIT, IIIT. When you are selected , according to your profile/ resume mostly they are assigned into the related project.",
},

 

{
id:3,
name:'Dileep',
image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
text:
	"Get good knowledge on different projects",
}
]


},
{
    cource_title:"backend",
    Cource_:"A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.",
    cource_duration:"6Months",
    heading:"BACK END DEVELOPMENT COURSE",
    cource_info:"this is a backend development course veryjsbodfivabsodivbas asijdjbvoaijhfsd vsf vs oijv bsodifvb",
    benefits:"Organizations, today tries to deploy its software on various platforms like laptop, mobile phones, tab etc… So the backend developer keen on creating the code which acceptable for cross-platform. The backend development is a very crucial part of websites which mainly involves web transfer among databases, server, client systems. Firstly, it needs to incorporate this technologies like webservice, microservices for faster sharing of client and server login and other information.The success of websites not only depends on frontend but also on back end. All the function of websites are because of it only. Without quality back end-development, no website work perfectly.Involving the newer back end technologies like microservice helps to ease out the server work pressure. It also helpful for easy maintenance and security of websites.",
    lessons:["pthon","introduction","variables","if","for"],
    creviews:[{
id:1,
name:'sirish',
text:
	"Job Security,Work Life Balance,Flexible Working hours,Support during Covid/other health aliments,Many Oppurtunities in different units ",
},


{
id:2,
name:'kumar',
text:
	"Nice place for experienced people.Good job security.Various domain and projects.",
},

 

{
id:3,
name:'sai',
text:
	"Having Job security. Few company policies are good.It has best work culture, highest job security, also provides many learning platforms",
}]
    // cource_img:img2

    
},
{
    cource_title:"fullstack",
    cource_:"A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.A full stop (or period) is primarily used to mark the end of a sentence. The main issue with them in academic writing is that many students do not use them enough. There is an assumption that long sentences are more academic. This is not true. Some academic concepts are difficult to describe in a simple sentence but the majority of sentences do not need to be complicated or overlong. See our page on Overlong sentences for guidance. See also Comma splices.",
    cource_duration:"12Months",
    heading:"FULL STACK DEVELOPMENT COURSE",
    benefits:"The field of full-stack web development is ripe with opportunities for anyone with an interest in technology and an understanding of how websites function on the cloud. Website developers with the skills to juggle the many moving parts of today’s complex online applications are in high demand across all industries. The term full-stack developers refer to these programmers. Startups and large enterprises alike need full-stack developers because of their flexibility and ability to jump in and repair problems in any part of the technical ecosystem involved in rapidly and affordably creating a website for a profitable product. Since full-stack developers are in such high demand in today’s businesses, an increasing number of young adults are choosing to enroll in full stack developer courses thanks to advantages of being full stack developer.",
    cource_info:"this is a full stack development course veryjsbodfivabsodivbas asijdjbvoaijhfsd vsf vs oijv bsodifvb",
    // cource_img:img3
    lessons:["pthon","html","react","if","for"]


}

];
  return (
    <div className="App">
      <h3>DCODERZ</h3>
      <div className="">

        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<UncontrolledExample/>} />
          </Routes>

            <Routes>
            <Route exact path="/frontend" element={<Eachcourse coursei={courses[0]}/>}/>
            <Route exact path="/backend"  element={<Eachcourse coursei={courses[1]}/>}/>
            <Route exact path="/fullstack"  element={<Eachcourse coursei={courses[2]}/>}/>

</Routes>
        
          <Footer_section1/>
          <Routes>
            <Route exact path="/about" element='#'/>
            <Route exact path="/contact" element='#'/>
            <Route exact path="/location" element='#'/>
          </Routes>
        
        <hr className="horizontal_row"></hr>
        <Footer_TC/>
        <hr className="horizontal_row"></hr>
        <Footer_TMP/>  
        <hr className="horizontal_row"></hr>
        <Footer_TPGP/>  
        <hr className="horizontal_row"></hr>
        <Footer_TR/>
      
          
        </BrowserRouter>
        {/* <BrowserRouter>
          <UncontrolledExample />
        </BrowserRouter>
        <BrowserRouter>
          <br>
          </br><br>
          </br>
          <h3>check out our latest courses</h3>

          <Cads />
          <Routes>
            <Route exact path="/" />
            <Route exact path="/" />
            <Route exact path="/" />


          </Routes>
          <br>
          </br><br>
          </br><br>
          </br><br>
          </br><br>
          </br>

        </BrowserRouter> */}

      </div>
    </div>
  );
}

export default App;
