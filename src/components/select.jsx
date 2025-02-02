import React, { useId, useState } from 'react';

function SelectCom() {
    const id = useId()
    const [selectedValue, setSelectedValue] = useState("default")
    return (
        <>
            <select onChange={(e) => setSelectedValue(e.target.value)} defaultValue="default" id={id} className='form-select shadow-none ps-3 pe-5 py-3 rounded-3' style={{ color: selectedValue == "default" ? "#6C757D80" : "black", fontWeight: "normal", border: "1px solid #800000", backgroundColor: "#F5F5F5" }}>
                <option className='fw-normal' value="default" style={{ color: "#6C757D80" }}>**choose your location**</option>
                <option className='text-black fw-normal' value="india">India</option>
                <option className='text-black fw-normal' value="kerala">Kerala</option>
                <option className='text-black fw-normal' value="trivandrum">Trivandrum</option>
                <option className='text-black fw-normal' value="calicut">Calicut</option>
            </select>
            <style>
                {`
                select:focus {
                outline:none;
                box-shadow-none;
                border-color:inherit;
                }
                `}
            </style>
        </>
    );
}

export default SelectCom;