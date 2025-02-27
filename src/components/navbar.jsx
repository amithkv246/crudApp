import React from 'react';
import InputGroup from './inputGroup';
import SelectCom from './select';
import { useNavigate } from 'react-router';
import SplitButton from './splitbutton';

function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <header className='position-fixed top-0 z-1' style={{ height: "12vh", width: "100%" }} >
                <nav className='d-flex justify-content-between align-items-center p-3' style={{ backgroundImage: "linear-gradient(to bottom right, #000000, #800000)" }}>
                    <div>
                        <h1 role='button' onClick={() => navigate("/home")} className='fw-bold' style={{ color: "#C0C0C0" }}>Car<span style={{ color: "#800000" }}>Vault</span></h1>
                    </div>
                    <div>
                        <SelectCom />
                    </div>
                    <div>
                        <InputGroup type={'text'} placeholder={'Find cars...'} />
                    </div>
                    <div role='button' className="icon p-2 rounded-5" style={{ border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5" }}>
                        <i className="fa-regular fa-heart fa-xl" ></i>
                    </div>
                    <div role='button' className="icon p-2 rounded-5" style={{ border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5" }}>
                        <i className="fa-regular fa-bell fa-xl"></i>
                    </div>
                    <div role='button' className="icon p-2 rounded-5" style={{ border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5" }}>
                        <i className="fa-regular fa-comment fa-xl"></i>
                    </div>
                    <div>
                        <SplitButton value={"Profile"} option={"Logout"} />
                    </div>
                    <div>
                        <button className='iconButton btn btn-light btn-lg fw-bold' style={{ color: "#6C757D", border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5" }}>sell</button>
                    </div>
                </nav>
            </header>
            <style>
                {`

                .icon,
                .iconButton {
                    transition: 0.2s ease;
                }

                .icon:hover,
                .iconButton:hover {
                    color: #FF6F61 !important;
                    background-color: #FFD700 !important;
                }
                `}
            </style>
        </>
    );
}

export default Navbar;