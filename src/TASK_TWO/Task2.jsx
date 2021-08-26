import React from 'react'
import '../../CSS/task2.css'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../../img/first.jpg'
import second from '../../img/second.jpg'
import third from '../../img/third.jpg'
import four from '../../img/four.jpg'
import five from '../../img/five.jpg'

const task2 = () => {
    return (
        <div className='task2'>
            <Carousel fade>
            <Carousel.Item >
                <img
                className="d-block w-100"
                src={first}
                alt="First slide"
                />
                <Carousel.Caption className='carousel_cap' id='carousel_cap1'>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum pharetra augue mollis interdum..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={third}
                alt="Second slide"
                />

                <Carousel.Caption className='carousel_cap' id='carousel_cap2'>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit pharetra augue mollis interdum..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={second}
                alt="Third slide"
                />

                <Carousel.Caption className='carousel_cap' id='carousel_cap3'>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur pharetra augue mollis interdum..</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={four}
                alt="Third slide"
                />

                <Carousel.Caption className='carousel_cap' id='carousel_cap4'>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur pharetra augue mollis interdum..</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={five}
                alt="Third slide"
                />

                <Carousel.Caption className='carousel_cap' id='carousel_cap5'>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur pharetra augue mollis interdum..</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <div className="youTube">
                <iframe width="300" height="250" src="https://www.youtube.com/embed/hBlDGTxLHlE" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            
        </div>
    )
}

export default task2
