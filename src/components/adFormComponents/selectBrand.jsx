import React, { useId, useState } from 'react';

function SelectBrand({opt1,opt2,opt3,opt4,onChange}) {
    const id = useId()
    const [selectedValue, setSelectedValue] = useState("default")
    const handleChange = (e) => {
        setSelectedValue(e.target.value); // Update local state
        onChange(e); // Update parent state (formData.brand)
      };

    return (
        
        <>
            <select onChange={handleChange} defaultValue="default" id={id} className='form-select shadow-none ps-3 pe-5 py-3 rounded-3 border-secondary' style={{ color: selectedValue == "default" ? "#6C757D80" : "black", fontWeight: "normal" }}>
                <option className='fw-normal' value="default" style={{ color: "#6C757D80" }}> </option>
                <option className='text-black fw-normal' value={opt1}>{opt1}</option>
                <option className='text-black fw-normal' value={opt2}>{opt2}</option>
                <option className='text-black fw-normal' value={opt3}>{opt3}</option>
                <option className='text-black fw-normal' value={opt4}>{opt4}</option>
            </select>
        </>
    );
}

export default SelectBrand;