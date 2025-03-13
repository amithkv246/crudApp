import React, { useEffect, useId, useState } from 'react';

function SelectBrandLoc({ value, options, onChange, indexString }) {
    const id = useId()
    const [selectedValue, setSelectedValue] = useState(value || "default")
    const handleChange = (e) => {
        onChange(e)
        setSelectedValue(e.target.value)
    }

    useEffect(() => {
        setSelectedValue(value || "default");
    }, [value])

    return (
        <>
            <select onChange={(e) => handleChange(e)} value={selectedValue} id={`${id}-select`}
                className='form-select shadow-none ps-3 pe-5 py-3 rounded-3 border-secondary'
                style={{ color: selectedValue == "default" ? "#6C757D80" : "black", fontWeight: "normal" }}
            >
                <option className='fw-normal' value="default" style={{ color: "#6C757D80" }} disabled></option>
                {
                    options.map((item, index) => (
                        <option key={index + indexString} className='text-black fw-normal' value={item}>{item}</option>
                    ))
                }
            </select >
        </>
    );
}

export default SelectBrandLoc;
