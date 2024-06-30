import Carousel from 'react-bootstrap/Carousel';
import img1 from './image1.jpg'
import img2 from './image2.jpg'
import img3 from './image3.jpg'
import "./homepage.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cads from '../courses/Cads';
import Card from '../courses/cardui.jsx';
// import Footer from '../footer/footer';



function UncontrolledExample() {
  return (
        <div className='carousels'>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
           id='carousel-image'
        />
        {/* <Card imgsrc={img1} title="{course.cource_title}" info="course.cource_info}"/> */}
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          id='carousel-image'
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
           id='carousel-image'
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Cads></Cads>
     
      </div>

  );
}

export default UncontrolledExample;