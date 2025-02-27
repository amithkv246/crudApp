import React, { useEffect, useState } from 'react';
import InputCom from '../components/adFormComponents/inputCom'
import SelectBrand from '../components/adFormComponents/selectBrand';
import RadioButtonCom from '../components/adFormComponents/radioButtonCom';
import { useNavigate } from 'react-router-dom';
import { adPostAPI } from '../APIServices/allAPI\'s/adPostAPI.JS';

function AdFormPage() {
    const navigate = useNavigate()
    const [images, setImages] = useState([])
    const [formData, setFormData] = useState({
        brand: "",
        images: []
    })
    const maxImages = 20

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        if (images.length + files.length > maxImages) {
            alert(`You can only upload up to ${maxImages} images.`);
            return;
        }
        const newImages = files.map((file) => ({ file, url: URL.createObjectURL(file), }));
        setImages((prev) => [...prev, ...newImages]);
    }

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const fileUpload = async (event) => {
        event.preventDefault()
        const reqBody = new FormData()
        reqBody.append("brand", formData.brand)
        reqBody.append("images", images)
        const userCredentials = JSON.parse(localStorage.getItem("userCredentials"))
        const reqHeader = {
            "Content-type": "multipart/form-data",
            "Authorization": `${userCredentials.token}`
        }
        try {
            const result = await adPostAPI(reqBody, reqHeader)
            console.log("Result" + result);
        } catch (error) {
            return error
        }
    }

    return (
        <>
            <header className='position-fixed top-0 z-1 bg-secondary-subtle' style={{ height: "12vh", width: "100%", boxShadow: "0px 0px 2px 2px #ccc" }} >
                <nav className='d-flex justify-content-start align-items-center p-3' style={{ height: "inherit" }}>
                    <span onClick={() => navigate(-1)}><i className="fa-solid fa-arrow-left fa-lg"></i></span>
                </nav>
            </header>

            <div style={{ marginTop: "12vh" }}>
                <div className='p-3 text-center'>
                    <h2>POST YOUR AD</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <form onSubmit={fileUpload} className='border border-1 border-secondary border-opacity-50 w-50' style={{ minHeight: "30rem" }} >
                        <div className='d-flex flex-column gap-3 p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>INCLUDE SOME DETAILS</h4>
                            <div>
                                <p className='mb-0 mt-2'>Brand*</p>
                                <SelectBrand opt1={'Maruthi Suzuki'} opt2={'Hyundai'} opt3={'Tata'} opt4={'Mahindra'} onChange={(e) => setFormData((prev) => ({ ...prev, brand: e.target.value }))} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Year*</p>
                                <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Fuel*</p>
                                <div className='d-flex flex-row gap-1'>
                                    <RadioButtonCom value={'CNG & Hybrids'} />
                                    <RadioButtonCom value={'Diesel'} />
                                    <RadioButtonCom value={'Petrol'} />
                                    <RadioButtonCom value={'Electric'} />
                                    <RadioButtonCom value={'LPG'} />
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Transmission*</p>
                                <div className='d-flex flex-row gap-1'>
                                    <RadioButtonCom value={'Automatic'} />
                                    <RadioButtonCom value={'Manual'} />
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>KM driven*</p>
                                <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>No. of owners*</p>
                                <div className='d-flex flex-row gap-1'>
                                    <RadioButtonCom value={'1st'} />
                                    <RadioButtonCom value={'2nd'} />
                                    <RadioButtonCom value={'3rd'} />
                                    <RadioButtonCom value={'4th'} />
                                    <RadioButtonCom value={'4+'} />
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Ad title*</p>
                                <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Description*</p>
                                <textarea className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                            </div>
                        </div>
                        <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>SET A PRICE</h4>
                            <p className='mb-0 mt-2'>Price*</p>
                            <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} />
                        </div>
                        <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>UPLOAD UPTO 20 PHOTOS</h4>
                            <p className='mb-0 mt-2'>Add a photo*</p>
                            {/* <i class="fa-solid fa-image fa-2xl"></i> */}
                            <input id='imgUploadBtn' type={'file'} accept="image/*" multiple onChange={handleFileChange} style={{ display: "none" }} />

                            <div className='p-2 pt-3 d-flex flex-row flex-wrap gap-2'>
                                <label htmlFor="imgUploadBtn" className='d-flex align-items-center justify-content-center border border-1 border-black' style={{ height: "100px", width: "100px" }}>
                                    <i className="fa-solid fa-plus" style={{ fontSize: "3rem" }}></i>
                                </label>
                                {
                                    images.map((item, index) => (
                                        <div key={"image" + index} style={{ height: "100px", width: "100px", position: 'relative' }}>
                                            <img src={item.url} alt="img" style={{ height: "100%", width: "100%", objectFit: 'contain' }} />
                                            <p className='rounded-5 mb-0 px-2' role='button' onClick={() => removeImage(index)} style={{ position: "absolute", top: "5px", right: "5px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
                                                <i className="fa-solid fa-xmark fa-2xs"></i>
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>CONFIRM YOUR LOCATION</h4>
                            <p className='mb-0 mt-2'>State*</p>
                            <SelectBrand opt1={'Kerala'} opt2={'Tamil Nadu'} opt3={'Karnataka'} opt4={'Andhra Pradesh'} />
                        </div>
                        <div className='p-4'>
                            <button type='submit' className="fs-5 btn btn-outline-secondary">Post now</button>
                        </div>
                    </form>
                </div>
            </div>

            <footer className='mt-5'>
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

export default AdFormPage;
