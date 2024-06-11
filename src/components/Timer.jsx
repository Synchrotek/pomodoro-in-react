import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../context/StateProvider';

const Timer = () => {
    const { time, setTime } = useContext(StateContext);
    const { isActive, setIsActive } = useContext(StateContext);

    useEffect(() => {
        if (isActive && time > 0) {
            const interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [time, isActive]);

    const handleToggleClock = () => {
        setIsActive(prevIsActive => !prevIsActive);
    }

    const getTime = (time) => {
        const minute = Math.floor(time / 60);
        const second = time % 60;
        return `${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`;
    }

    const getBorderStyle = () => {
        const progress = time;
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
                    <div className='text-6xl'>{getTime(time)}</div>
                    <button
                        onClick={handleToggleClock}
                    >
                        {isActive ? "PAUSE" : "START"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Timer