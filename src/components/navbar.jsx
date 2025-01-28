import React from 'react';
import InputGroup from './inputGroup';

function Navbar() {
    return (
        <>
            <header className='position-fixed top-0 z-1' style={{ height: "12vh", width: "100%" }} >
                <nav className='d-flex justify-content-between align-items-center p-3' style={{ backgroundImage: "linear-gradient(to bottom right, #000000, #800000)" }}>
                    <div>
                        <h1 className='fw-bold' style={{ color: "#C0C0C0" }}>Car<span style={{ color: "#800000" }}>Vault</span></h1>
                    </div>
                    <div>
                        <InputGroup type={'text'} placeholder={'Find cars...'} />
                    </div>
                    <div role='button' className="p-2 rounded-5" style={{ border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5" }}>
                        <i className="fa-regular fa-heart fa-xl" ></i>
                    </div>
                    <div role='button' className="p-2 rounded-5" style={{ border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5" }}>
                        <i class="fa-regular fa-bell fa-xl"></i>
                    </div>
                    <div>
                        <button className='btn btn-light fw-bold' style={{ color: "#6C757D" }}>login</button>
                    </div>
                    <div>
                        <button className='btn btn-light fw-bold' style={{ color: "#6C757D" }}>sell</button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;