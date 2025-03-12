import React, { useState } from 'react';
import InputCom from '../components/adFormComponents/inputCom'
import SelectBrandLoc from '../components/adFormComponents/selectBrandLoc';
import RadioButtonCom from '../components/adFormComponents/radioButtonCom';
import { useNavigate } from 'react-router-dom';
import { adPostAPI } from '../APIServices/allAPIs';

function AdFormPage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        brand: "",
        year: "",
        fuel: "",
        transmission: "",
        kmDriven: "",
        noOfOwners: "",
        adTitle: "",
        description: "",
        price: "",
        images: [],
        location: ""
    })

    const maxImages = 20
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (formData.images.length + files.length > maxImages) {
            alert(`You can only upload up to ${maxImages} images.`);
            return;
        }
        const newFiles = files.map((file) => ({ file, url: URL.createObjectURL(file), }));
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...newFiles]
        }))
    }

    const removeImage = (index) => {
        const newArray = formData.images.filter((_, i) => i !== index)
        setFormData((prev) => ({
            ...prev,
            images: newArray
        }))
    };

    const fileUpload = async (event) => {
        event.preventDefault()
        const userCredentials = JSON.parse(localStorage.getItem("userCredentials"))
        const reqBody = new FormData()
        reqBody.append("userId", userCredentials.userId)
        reqBody.append("brand", formData.brand)
        reqBody.append("year", formData.year)
        reqBody.append("fuel", formData.fuel)
        reqBody.append("transmission", formData.transmission);
        reqBody.append("kmDriven", formData.kmDriven);
        reqBody.append("noOfOwners", formData.noOfOwners);
        reqBody.append("adTitle", formData.adTitle);
        reqBody.append("description", formData.description);
        reqBody.append("price", formData.price);
        formData.images.forEach((image) => {
            reqBody.append("images", image.file);
        });
        reqBody.append("location", formData.location);

        const reqHeader = {
            "Content-type": "multipart/form-data",
            "Authorization": `${userCredentials.token}`
        }
        try {
            const result = await adPostAPI(reqBody, reqHeader)
            console.log("Result : ", result);
        } catch (err) {
            console.error(err)
        }
    }

    const handleBrandChange = (e) => {
        setFormData((prev) => ({ ...prev, brand: e.target.value }))
    }

    const handleYearChange = (e) => {
        setFormData((prev) => ({ ...prev, year: e.target.value }))
    }

    const handleFuelChange = (value) => {
        setFormData((prev) => ({ ...prev, fuel: value }))
    }

    const handleTransmissionChange = (value) => {
        setFormData((prev) => ({ ...prev, transmission: value }))
    }

    const handleKMDrivenChange = (e) => {
        setFormData((prev) => ({ ...prev, kmDriven: e.target.value }))
    }

    const handleNoOfOwnersChange = (value) => {
        setFormData((prev) => ({ ...prev, noOfOwners: value }))
    }

    const handleAdTitleChange = (e) => {
        setFormData((prev) => ({ ...prev, adTitle: e.target.value }))
    }

    const handleDescriptionChange = (e) => {
        setFormData((prev) => ({ ...prev, description: e.target.value }))
    }

    const handlePriceChange = (e) => {
        setFormData((prev) => ({ ...prev, price: e.target.value }))
    }

    const handleLocationChange = (e) => {
        setFormData((prev) => ({ ...prev, location: e.target.value }))
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
                                <SelectBrandLoc options={['Maruthi Suzuki', 'Hyundai', 'Tata', 'Mahindra']} indexString={'brand'} onChange={(e) => handleBrandChange(e)} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Year*</p>
                                <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} onChange={(e) => handleYearChange(e)} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Fuel*</p>
                                <div className='d-flex flex-row gap-1'>
                                    <RadioButtonCom value={'CNG & Hybrids'} name={'fuel'} onChange={handleFuelChange} />
                                    <RadioButtonCom value={'Diesel'} name={'fuel'} onChange={handleFuelChange} />
                                    <RadioButtonCom value={'Petrol'} name={'fuel'} onChange={handleFuelChange} />
                                    <RadioButtonCom value={'Electric'} name={'fuel'} onChange={handleFuelChange} />
                                    <RadioButtonCom value={'LPG'} name={'fuel'} onChange={handleFuelChange} />
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Transmission*</p>
                                <div className='d-flex flex-row gap-1'>
                                    <RadioButtonCom value={'Automatic'} name={'transmission'} onChange={handleTransmissionChange} />
                                    <RadioButtonCom value={'Manual'} name={'transmission'} onChange={handleTransmissionChange} />
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>KM driven*</p>
                                <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} onChange={(e) => handleKMDrivenChange(e)} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>No. of owners*</p>
                                <div className='d-flex flex-row gap-1'>
                                    <RadioButtonCom value={'1st'} name={'noOfOwners'} onChange={handleNoOfOwnersChange} />
                                    <RadioButtonCom value={'2nd'} name={'noOfOwners'} onChange={handleNoOfOwnersChange} />
                                    <RadioButtonCom value={'3rd'} name={'noOfOwners'} onChange={handleNoOfOwnersChange} />
                                    <RadioButtonCom value={'4th'} name={'noOfOwners'} onChange={handleNoOfOwnersChange} />
                                    <RadioButtonCom value={'4+'} name={'noOfOwners'} onChange={handleNoOfOwnersChange} />
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Ad title*</p>
                                <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} onChange={(e) => handleAdTitleChange(e)} />
                            </div>
                            <div>
                                <p className='mb-0 mt-2'>Description*</p>
                                <textarea className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3 border-secondary'} onChange={(e) => handleDescriptionChange(e)} />
                            </div>
                        </div>
                        <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>SET A PRICE</h4>
                            <p className='mb-0 mt-2'>Price*</p>
                            <InputCom type={'text'} className={'form-control shadow-none ps-3 pe-5 py-3 rounded-3'} onChange={(e) => handlePriceChange(e)} />
                        </div>
                        <div className='p-4 border-bottom border-1 border-secondary border-opacity-50'>
                            <h4>UPLOAD UPTO 20 PHOTOS</h4>
                            <p className='mb-0 mt-2'>Add a photo*</p>
                            {/* <i class="fa-solid fa-image fa-2xl"></i> */}
                            <input id='imgUploadBtn' type={'file'} accept="image/*" multiple onChange={handleFileChange} style={{ display: "none" }} />

                            <div className='p-2 pt-3 d-flex flex-row flex-wrap gap-2'>
                                <label htmlFor="imgUploadBtn" className='d-flex align-items-center justify-content-center border border-1 border-black' style={{ height: "100px", width: "100px" }}>
                                    <i className="fa-solid fa-plus fa-2xl"></i>
                                </label>
                                {
                                    formData.images.map((item, index) => (
                                        <div key={"image" + index} style={{ height: "100px", width: "100px", position: 'relative' }}>
                                            <img src={item.url} alt="img" style={{ height: "100%", width: "100%", objectFit: 'contain' }} />
                                            <p className='rounded-5 mb-0 px-2' role='button' onClick={() => removeImage(index)} style={{ position: "absolute", top: "5px", right: "5px", background: "red", color: "white", border: "none" }}>
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
                            <SelectBrandLoc options={['Kerala', 'Tamil Nadu', 'Karnataka', 'Andra Pradesh']} indexString={'place'} onChange={(e) => handleLocationChange(e)} />
                        </div>
                        <div className='p-4'>
                            <button type='submit' className="fs-5 fw-bold btn btn-outline-secondary text-secondary">Post now</button>
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
