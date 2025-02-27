import React from 'react';

function InputGroup({ type, placeholder, onChange, onClick }) {
    return (
        <>
            <div className="input-group">
                <input type={type} size={"40"} className="p-3 pe-1  rounded-start-3" placeholder={placeholder} onChange={onChange} style={{ border: "1px solid #800000", backgroundColor: "#F5F5F5", borderRight: "0px" }} />
                <span className="input-group-text rounded-end-3 pe-3" role='button' onClick={onClick} style={{ border: "1px solid #800000", color: "#6C757D", backgroundColor: "#F5F5F5", borderLeft: "0px" }}><i className="fa-solid fa-magnifying-glass fa-lg"></i></span>
            </div>
            <style>
                {`
input::placeholder {
    color: #6C757D;
    font-weight: bold;
}
input:focus {
    outline: none;
    box-shadow: none;
    border-color: inherit;
}
                `}
            </style>
        </>
    );
}

export default InputGroup;