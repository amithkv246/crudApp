import React from 'react';
import Navbar from '../components/navbar';
import FooterCom from '../components/footerCom';
import CarouselCom from '../components/carouselCom';

function ProductDetailsPage() {
    return (
        <>
            <Navbar />
            <div className='d-flex flex-column justify-content-center px-5 gap-5' style={{ backgroundColor: "#eee", padding: "24vh 0vw" }}>
                <CarouselCom src1={"./Honda/hondacityzx1.jpg"} src2={"./Honda/hondacityzx2.jpg"} src3={"./Honda/hondacityzx3.jpg"} />
                <div className='grid row mx-4'>
                    <div className='d-flex flex-column gap-4 col-8'>
                        <div className='d-flex flex-column bg-white rounded-2 px-4 py-3' style={{ boxShadow: "0px 0px 5px 2px #aaa" }}>
                            <span className='text-center text-primary bg-primary-subtle rounded-1 p-2' style={{ width: "140px" }}><i className="fa-solid fa-user-check me-1"></i>VERIFIED SELLER</span>
                            <p className='fs-2 fw-bold mb-0'>Honda City ZX (2016)</p>
                            <div className='d-flex flex-row p-1 text-secondary fw-light'>
                                <p className='border-end border-2 pe-2 mb-0'><i className="fa-solid fa-gas-pump me-1"></i>PETROL</p>
                                <p className='border-end border-2 pe-2 ps-2 mb-0'><i className="fa-solid fa-gauge-simple-high me-1"></i>53,000 KM</p>
                                <p className='ps-2 mb-0'><i className="fa-solid fa-gears me-1"></i>AUTOMATIC</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column bg-white rounded-2 ' style={{ boxShadow: "0px 0px 5px 2px #aaa" }}>
                            <p className="fs-3 text-secondary fw-bold border-bottom border-2 border-secondary-subtle px-4 py-2">Overview</p>
                            <div className='d-flex flex-row justify-content-start ps-4 pb-1 gap-5 fs-5'>
                                <p className='d-flex flex-row align-items-center gap-3 me-5'>
                                    <i className="fa-regular fa-user fa-xl"></i>
                                    <span><span className='text-secondary fw-light fs-6'>Owner</span><br />4th</span>
                                </p>
                                <p className='d-flex flex-row align-items-center gap-2 me-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" height={"35"} width={"35"}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <span><span className='text-secondary fw-light fs-6'>Location</span><br />Vikaspuri, Delhi</span>
                                </p>
                                <p className='d-flex flex-row align-items-center gap-3'>
                                    <i className="fa-regular fa-calendar fa-xl"></i>
                                    <span><span className='text-secondary fw-light fs-6'>Posting date</span><br />25-JAN-25</span>
                                </p>
                            </div>
                        </div>
                        <div className='d-flex flex-column bg-white rounded-2' style={{ boxShadow: "0px 0px 5px 2px #aaa" }}>
                            <p className="fs-3 text-secondary fw-bold border-bottom border-2 border-secondary-subtle px-4 py-2 mb-0">Description</p>
                            <p className='p-4'>
                                HONDA CITY ZX<br />
                                TOP MODEL,AUTOMATIC WITH SUNROOF<br />
                                2016 registration<br />
                                Up registered<br />
                                04th owner<br />
                                53000kms Driven<br />
                                Petrol + CNG<br />
                                With alloy wheels<br />
                                Vip number 0070<br />
                                Valid insurance till February<br /><br />
                                ADDITIONAL VEHICLE INFORMATION:<br />
                                ABS: Yes<br />
                                Adjustable Steering: Yes<br />
                                Alloy Wheels: Yes<br />
                                Anti Theft Device: Yes<br />
                                Aux Compatibility: Yes<br />
                                Bluetooth: Yes<br />
                                Color: White<br />
                                Cruise Control: Yes<br />
                                Insurance Type: Third Party<br />
                                Navigation System: Yes<br />
                                Parking Sensors: Yes<br />
                                Power steering: Yes<br />
                                AM/FM Radio: Yes<br />
                                Rear Parking Camera: Yes<br />
                                Registration Place: UP<br />
                                Exchange: Yes<br />
                                Sunroof: Yes<br />
                                USB Compatibility: Yes<br />
                            </p>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-4 col-4'>
                        <div className='d-flex flex-column bg-white rounded-2 p-3 gap-2' style={{ boxShadow: "0px 0px 5px 2px #aaa" }}>
                            <p className='fs-1 fw-bold mb-0'><i className="fa-solid fa-indian-rupee-sign me-2"></i>5,15,000</p>
                            <a href="#" role='button' className='bg-info text-decoration-none rounded-2 px-3 py-2 text-center fw-bold fs-5'>Make offer</a>
                            <a href="#" role='button' className='bg-primary-subtle text-decoration-none rounded-2 px-3 py-2'>Get instant loan. <span className='fw-bold'>Apply Now!</span></a>
                        </div>
                        <div className='d-flex flex-column bg-white rounded-2 p-4 gap-3' style={{ boxShadow: "0px 0px 5px 2px #aaa" }}>
                            <div role='button' className='d-flex flex-row fw-bold justify-content-between align-items-center'>
                                <p className='mb-0 d-flex flex-row align-items-center gap-3'>
                                    <span className='bg-dark text-white rounded-5 d-inline-block' style={{ height: "50px", width: "50px" }}>DP</span>
                                    <span>Seller Name</span>
                                </p>
                                <p className='mb-0'><i className="fa-solid fa-chevron-right"></i></p>
                            </div>
                            <a href="#" role='button' className='btn btn-outline-dark fw-bold'>Chat with seller</a>
                            <p className='fs-6 text-center'><i className="fa-solid fa-phone me-1"></i> *** *** **** <span className='text-primary fw-light ms-2' role='button'><u>Show number</u></span></p>
                        </div>
                        <div className='d-flex flex-column bg-white rounded-2 p-4' style={{ boxShadow: "0px 0px 5px 2px #aaa" }}>
                            location
                        </div>
                    </div>
                </div>
            </div>
            <FooterCom />
        </>
    );
}

export default ProductDetailsPage;