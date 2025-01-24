import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const isLoggedInVar = useSelector((state) => state.counter.isLoggedIn)
    const [actProtectRoute, setActProtectRoute] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('userCredentials')) {
            setActProtectRoute(true)
        } else {
            setActProtectRoute(false)
            navigate("/")
        }
    }, [isLoggedInVar]);

    return actProtectRoute && <>{children}</>;
}

export default ProtectedRoute;
