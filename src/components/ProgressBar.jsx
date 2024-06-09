// src/ProgressBar.js
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(20);

    // useEffect(() => {
    //     if (percentage < 100) {
    //         const timer = setInterval(() => {
    //             setPercentage((prev) => prev + 0.3);
    //         }, 100);
    //         return () => clearInterval(timer);
    //     }
    // }, [percentage]);

    const getBorderStyle = () => {
        const rotation = (percentage / 100) * 360;
        return {
            background: `conic-gradient(#FFA500 ${rotation}deg, transparent 0deg)`
        };
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-full h-full border-4 rounded-3xl" style={getBorderStyle()}></div>
            <div className="absolute w-full h-full border-4 rounded-3xl border-transparent"></div>
            <div className="relative z-10 text-white text-2xl">
                {percentage}%
            </div>
        </div>
    );
};

export default ProgressBar;
