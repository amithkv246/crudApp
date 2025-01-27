import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCom() {
    const [isFeatured, setIsFeatured] = useState(false)
    return (
        <>
            <Card className={isFeatured ? "" : ""} style={{ width: '18rem', minHeight: '18rem' }}>
                <div className={isFeatured ? "imgContainer d-flex align-items-center justify-content-center" : ""}>
                    <Card.Img className={isFeatured ? "cardImg p-2" : "p-2"} src="./loginbg/loginbg.jpg" />
                    {
                        isFeatured &&
                        <div className='cardFeatured bg-warning rounded-1 fw-light' style={{ fontSize: "small", padding: "1px 10px" }}>FEATURED</div>
                    }
                </div>
                <Card.Body className={isFeatured ? "p-0 ps-2 bg-warning" : "p-0"}>
                    <div className={isFeatured ? "d-flex flex-column gap-1 bg-white p-3 pt-1 pb-1" : "d-flex flex-column gap-1 p-3 pt-1 pb-1"}>
                        <Card.Title className='p-0 m-0'>Rs 5,15,000</Card.Title>
                        <Card.Text className='p-0 m-0 fw-normal'>2016 - 53,000 km</Card.Text>
                        <Card.Subtitle className='p-0 m-0 text-muted fw-light'>Honda City ZX, 2016, Petrol</Card.Subtitle>
                        <Card.Subtitle className='p-0 m-0 text-muted fw-lighter' style={{ fontSize: "small" }} >VIKASPURI, DELHI</Card.Subtitle>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
            <style>
                {`
                .imgContainer {
                    position: relative;
                    height: 11.6rem;
                    width: 17.9rem;
                }
                
                .cardImg {
                    position: absolute;
                }
                
                .cardFeatured {
                    position: absolute;
                    bottom: 1%;
                    left: 5%;
                    line-height: 20px;
                }
                `}
            </style>
        </>
    );
}

export default CardCom;