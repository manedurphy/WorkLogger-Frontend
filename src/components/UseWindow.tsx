import { useState, useEffect } from 'react';

interface Window {
    width: number;
    height: number;
}

const UseWindow = (): Window => {
    const [windowSize, setWindowSize] = useState({
        width: -1,
        height: -1,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default UseWindow;
