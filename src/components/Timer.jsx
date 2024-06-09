import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            const timer = setInterval(() => {
                setProgress((prev) => prev + 0.5);
            }, 100);
            return () => clearInterval(timer);
        }
    }, [progress]);

    const getBorderStyle = () => {
        const rotation = (progress / 100) * 360;
        return {
            background: `conic-gradient(#FFA500 ${rotation}deg, transparent 0deg)`
        };
    };

    return (
        <div className='w-2/3 sm:h-2/3 h-2/4 my-10 text-center bg-[#240750] m-4 rounded-3xl p-4 shadow-2xl'>
            <div className='w-full h-full rounded-2xl border-1 border-orange-400 p-1'
                style={getBorderStyle()}>
                <div className='w-full h-full bg-black rounded-2xl flex flex-col gap-3 justify-center'>
                    <div className='text-6xl'>05:20</div>
                    <div>PASUE</div>
                </div>
            </div>
        </div>
    )
}

export default Timer