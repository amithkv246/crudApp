import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { baseURL } from '../APIServices/baseURL';

function CardCom({ onClick, handleAddToWishlist, userAd }) {
    const [isFeatured, setIsFeatured] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            {
                userAd ?
                    <Card className={isFeatured ? "" : ""} style={{ width: '18rem', minHeight: '18rem' }} onClick={onClick}>
                        <div className={isFeatured ? "imgContainer d-flex align-items-center justify-content-center" : ""} style={{ height: "11.6rem", width: "17.9rem" }}>
                            <Card.Img className={isFeatured ? "cardImg p-2" : "p-2 "} style={{ height: "100%", width: "100%", objectFit: "contain" }} src={`${baseURL}${userAd.imagePath[0]}`} alt='img' />
                            {
                                isFeatured &&
                                <div className='cardFeatured bg-warning rounded-1 fw-light' style={{ fontSize: "small", padding: "1px 10px" }}>FEATURED</div>
                            }
                        </div>
                        <Card.Body className={isFeatured ? "p-0 ps-2 bg-warning rounded-bottom-1" : "p-0"}>
                            <div className={isFeatured ? "d-flex flex-column gap-1 bg-white p-3 pt-1 pb-1" : "d-flex flex-column gap-1 p-3 pt-1 pb-1"} style={{ borderRadius: "0px 0px 0.2rem 0.2rem" }}>
                                <Card.Title className='p-0 m-0'>{userAd.price}</Card.Title>
                                <Card.Text className='p-0 m-0 fw-normal'>{userAd.year} - {userAd.kmDriven}</Card.Text>
                                <Card.Subtitle className='p-0 m-0 text-muted fw-light'>{userAd.brand}, {userAd.year}, {userAd.fuel}</Card.Subtitle>
                                <Card.Subtitle className='p-0 m-0 text-muted fw-lighter' style={{ fontSize: "small" }} >{userAd.location}</Card.Subtitle>
                            </div>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                    :
                    <Card className={isFeatured ? "" : ""} style={{ width: '18rem', minHeight: '18rem' }} onClick={onClick}>
                        <div className={isFeatured ? "imgContainer d-flex align-items-center justify-content-center" : ""}>
                            <Card.Img className={isFeatured ? "cardImg p-2" : "p-2"} src="./loginbg/loginbg.jpg" />
                            {
                                isFeatured &&
                                <div className='cardFeatured bg-warning rounded-1 fw-light' style={{ fontSize: "small", padding: "1px 10px" }}>FEATURED</div>
                            }
                            <div role='button' onClick={handleAddToWishlist} className={isFeatured ? "cardWish bg-white p-2 rounded-5 mt-1" : "cardWish bg-white p-2 rounded-5"}><i className="fa-regular fa-heart fa-xl text-secondary"></i></div>
                            {/* <i class="fa-solid fa-heart fa-xl text-secondary"></i> //wishbutton onclick */}
                        </div>
                        <Card.Body className={isFeatured ? "p-0 ps-2 bg-warning rounded-bottom-1" : "p-0"}>
                            <div className={isFeatured ? "d-flex flex-column gap-1 bg-white p-3 pt-1 pb-1" : "d-flex flex-column gap-1 p-3 pt-1 pb-1"} style={{ borderRadius: "0px 0px 0.2rem 0.2rem" }}>
                                <Card.Title className='p-0 m-0'>Rs 5,15,000</Card.Title>
                                <Card.Text className='p-0 m-0 fw-normal'>2016 - 53,000 km</Card.Text>
                                <Card.Subtitle className='p-0 m-0 text-muted fw-light'>Honda City ZX, 2016, Petrol</Card.Subtitle>
                                <Card.Subtitle className='p-0 m-0 text-muted fw-lighter' style={{ fontSize: "small" }} >VIKASPURI, DELHI</Card.Subtitle>
                            </div>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
            }
            <style>
                {`
                .imgContainer {
                    position: relative;
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
                
                .cardWish {
                    position: absolute;
                    top: 5%;
                    right: 5%;
                }
                `}
            </style>
        </>
    );
}

export default CardCom;