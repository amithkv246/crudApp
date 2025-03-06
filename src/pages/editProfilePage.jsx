import React from 'react';
import InputCom from '../components/adFormComponents/inputCom';
import SelectBrandLoc from '../components/adFormComponents/selectBrandLoc';

function EditProfilePage() {
    return (
        <>
            <header className='position-fixed top-0 z-1 bg-secondary-subtle' style={{ height: "12vh", width: "100%", boxShadow: "0px 0px 2px 2px #ccc" }} >
                <nav className='d-flex justify-content-start align-items-center p-3' style={{ height: "inherit" }}>
                    <span onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left fa-lg"></i></span>
                </nav>
            </header>

            <div className='bg-info bg-opacity-10 pb-5' style={{ marginTop: "12vh" }}>
                <form>
                    <div className='d-flex justify-content-center'>
                        <div className='mt-5 d-flex flex-column bg-white rounded-3 p-4' style={{ width: "70vw" }}>


                            <div className='border-bottom border-1 border-secondary border-opacity-50 p-4 text-center'>
                                <h2>My Profile</h2>
                            </div>


                            <div className='grid row border-bottom border-1 border-secondary border-opacity-50'>
                                <div className='col-5 p-4'>
                                    <div className='' name="image">
                                        <div className='position-relative p-1' style={{ height: "200px", width: "200px" }}>
                                            <div className='bg-secondary-subtle' style={{ borderRadius: "6rem" }}> {/*profile pic container */}
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </div>
                                            <div className='position-absolute' style={{ top: "63%", left: "67%" }}>
                                                <input id='imgUploadBtn' type={'file'} accept="image/*" multiple style={{ display: "none" }} />
                                                <div className='p-2 pt-3 d-flex flex-row flex-wrap gap-2'>
                                                    <label htmlFor="imgUploadBtn" className='d-flex align-items-center justify-content-center bg-white p-1 rounded-5 border border-2 border-black' style={{ height: "50px", width: "50px" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                                        </svg>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='' name="address">
                                        <p>address</p>
                                        <p>Home:</p>
                                        <textarea className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3 border-secondary'} />
                                        <p>Work:</p>
                                        <textarea className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3 border-secondary'} />
                                    </div>
                                </div>
                                <div className='col-7 p-4 d-flex justify-content-center align-items-center'>
                                    <div>
                                        <div>
                                            <p className='m-1'>Name</p>
                                            <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                                        </div>
                                        <div>
                                            <p className='m-1'>Email</p>
                                            <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} other={{ disabled: true }} />
                                        </div>
                                        <div>
                                            <p className='m-1'>Mobile</p>
                                            <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                                        </div>
                                        <div>
                                            <p className='m-1'>Gender</p>
                                            <SelectBrandLoc indexString={'gender'} options={['Male', 'Female', 'Other']} />
                                        </div>
                                        <div>
                                            <p className='m-1'>Date of birth</p>
                                            <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                                        </div>
                                        <div>
                                            <p className='m-1'>Bio</p>
                                            <textarea className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3 border-secondary'} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='p-4 text-center'>
                                <button type='submit' className="fs-5 fw-bold btn btn-outline-secondary text-secondary">Save Profile</button>
                            </div>



                        </div>
                    </div>
                </form>
            </div>

            <footer>
                <div className='position-relative' style={{ minHeight: "25vh" }}>
                    <div className='position-absolute w-100 d-flex flex-row justify-content-around align-items-center p-3' style={{ minHeight: "25vh", color: "#D3D3D3", backgroundColor: "#1C1C1C" }}>
                        <div className='d-flex flex-row gap-5 align-items-center pe-5'>
                            <h2 className="fw-bold text-end" style={{ lineHeight: "1.5rem" }}>CarTradeTech<br /><span className='fs-4 fw-normal'>Group</span></h2>
                            <span className='border-end border-1 border-light' style={{ height: "16vh" }}></span>
                            <h2 className="fw-bold">CarVault</h2>
                        </div>
                        <h3 role='button' className="fw-bold">carWale</h3>
                        <h3 role='button' className="fw-bold">bikeWale</h3>
                        <h3 role='button' className="fw-bold">CarTrade</h3>
                        <h3 role='button' className="fw-bold text-center" style={{ lineHeight: "1.5rem" }}>MOBILITY<br />OUTLOOK</h3>
                    </div>
                    <p style={{ color: "#D3D3D3" }} className="py-2 px-4 position-absolute start-0 bottom-0"><span role='button'>Help - Sitemap</span></p>
                    <p style={{ color: "#D3D3D3" }} className="py-2 px-4 position-absolute end-0 bottom-0"><span role='button'>All rights reserved © 2006-2025 CarVault</span></p>
                </div>
            </footer>
        </>
    );
}

export default EditProfilePage;
