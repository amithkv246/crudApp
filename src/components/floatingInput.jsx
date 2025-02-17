import React, { useEffect, useId, useState } from 'react';

function FloatingInput({ type, label, value, onChange, name, validation }) {
    const id = useId()
    const [showPassword, setShowPassword] = useState(false)

    const toggleVisibility = () => {
        setShowPassword((prev) => (!prev))
    }

    useEffect(() => {
        if (value === "") {
            setShowPassword(false)
        }
    }, [value])

    return (
        <>
            <div className='d-flex flex-column gap-1'>
                <div className="floatContainer d-flex align-items-center">
                    <input className='floatingInput border border-1 border-white rounded-2' id={id} name={name} type={type === "password" ? (showPassword ? "text" : "password") : type} value={value} onChange={onChange} required />
                    <label className='floatingLabel rounded-2' htmlFor={id}>{label}</label>
                    {
                        type === "password" &&
                        value !== "" &&
                        <label role='button' className='visibilityIcon d-flex justify-content-center align-items-center' htmlFor={id}>
                            {
                                !showPassword ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ height: "24px", width: "24px", color: "#ffffff" }} onClick={toggleVisibility}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ height: "24px", width: "24px", color: "#ffffff" }} onClick={toggleVisibility}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                            }
                        </label>
                    }
                </div>
                <p className='text-center mb-0' style={{fontSize: "small", color: "#ece75f"}}>{validation}</p>
            </div>
            <style>
                {`
input::-ms-reveal, input::-ms-clear { display: none; }

.floatContainer {
    position: relative;
    height: 40px;
    line-height: 40px;
}

input.floatingInput {
    position: absolute;
    width: 100%;
    line-height: 40px;
    outline: none;
    background: transparent;
    transition: 0.2s ease;
    z-index: 2;
    padding: 2px 10px;
    font-size: 1.25rem;
}

label.floatingLabel {
    position: absolute;
    color: #FFFFFF;
    background: transparent;
    font-weight: 400;
    transition: 0.3s ease;
    z-index: 3;
    padding: 0px 10px;
    font-size: 1.25rem;
}

label.visibilityIcon {
    position: absolute;
    z-index: 5;
    right: 4%;
    top: 50%;
    transform: translateY(-50%);
}

input.floatingInput:focus,
input.floatingInput:valid {
    color: #FFFFFF;
    z-index: 1;
    padding: 4px 10px 0px;
    padding-right: 44px;
}

input.floatingInput:focus + label.floatingLabel,
input.floatingInput:valid + label.floatingLabel {
    color: #9FA6B2;
    background-color: #FFFFFF;
    font-weight: 800;
    transform: translate(10px, -23px);
    z-index: 4;
    padding: 0px 5px;
    line-height: 20px;
    font-size: 0.62rem; 
}
                `}
            </style>
        </>
    );
}

export default FloatingInput;