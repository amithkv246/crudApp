import React, { useId } from 'react';

function SelectCom() {
    const id = useId()
    return (
        <>
            <select id={id} className='form-select shadow-none ps-3 pe-5 py-3 rounded-3' style={{ color: "#6C757D", fontWeight: "bold", border: "1px solid #800000", backgroundColor: "#F5F5F5" }}>
                <option className='fw-normal' value="default" selected style={{ color: "lightgrey" }}>**choose your location**</option>
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