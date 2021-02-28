import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Verify = (): JSX.Element => {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const hash = window.location.pathname.slice(8);
        axios.get(`/api/activation/${hash}`).then(() => setSuccess(true));
    }, []);

    return success ? (
        <div>
            Your account has been verified! Click <a href={'/login'}>here</a> to log in
        </div>
    ) : (
        <div>
            Could not verify your account. Please try registering <a href={'/register'}>again</a>.
        </div>
    );
};

export default Verify;
