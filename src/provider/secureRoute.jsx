import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const isLoggedInVar = useSelector((state) => state.counter.isLoggedIn);
    const [isAllowed, setIsAllowed] = useState(!!localStorage.getItem('userCredentials'));

    useEffect(() => {
        const checkAuthStatus = () => {
            const isAuthenticated = !!localStorage.getItem('userCredentials');
            if (isAuthenticated) {
                setIsAllowed(true);
            } else {
                setIsAllowed(false);
                navigate("/");
            }
        };

        checkAuthStatus();

        const handleStorageChange = (event) => {
            if (event.storageArea === localStorage) {
                checkAuthStatus();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [isLoggedInVar, navigate]);

    return isAllowed &&
        <>
            {children}
        </>;
}

export default ProtectedRoute;
