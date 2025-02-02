import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselCom({ src1, src2, src3 }) {
    return (
        <>
            <Carousel className='bg-dark rounded-3 z-0' style={{ height: "400px", width: "100%" }}>
                <Carousel.Item className=''>
                    <img
                        className="d-block mx-auto"
                        src={src1}
                        alt="First slide"
                        height={"400px"}
                        width={"auto"}
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className=''>
                    <img
                        className="d-block mx-auto"
                        src={src2}
                        alt="Second slide"
                        height={"400px"}
                        width={"auto"}
                    />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className=''>
                    <img
                        className="d-block mx-auto"
                        src={src3}
                        alt="Third slide"
                        height={"400px"}
                        width={"auto"}
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselCom;