import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../context/StateProvider';
import { FaPlay, FaPause } from "react-icons/fa";
import { LuTimerReset } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";

const Timer = () => {
    const {
        time, setTime,
        isActive, setIsActive,
        initTime,
        setShowSetting
    } = useContext(StateContext);

    useEffect(() => {
        if (isActive && time > 0) {
            const interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [time, isActive, setTime]);

    const handleToggleClock = () => {
        setIsActive(prevIsActive => !prevIsActive);
    }

    const handleResetClock = () => {
        setTime(initTime);
        setIsActive(false);
    }

    const getTime = (time) => {
        const minute = Math.floor(time / 60);
        const second = time % 60;
        return `${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`;
    }

    const getBorderStyle = () => {
        const progress = time;
        const rotation = (progress / initTime) * 360;
        return {
            background: `conic-gradient(#FFA500 ${rotation}deg, transparent 0deg)`
        };
    };

    return (
        <div className='w-2/3 sm:h-2/3 h-2/4 my-10 text-center bg-[#240750] m-4 rounded-3xl p-4 shadow-2xl'>
            <div className='w-full h-full rounded-2xl border-1 border-orange-400 p-1'
                style={getBorderStyle()}>
                <div className='w-full h-full bg-black rounded-2xl flex flex-col gap-3 justify-center'>
                    <div className='text-6xl md:text-9xl md:mb-10'>{getTime(time)}</div>
                    <div className='flex flex-col gap-3 md:gap-6 items-center text-2xl md:scale-150'>
                        <button onClick={handleToggleClock}
                            className='px-6 rounded sm:hover:px-10 hover:bg-red-400 hover:bg-opacity-30 transition-all border-b-2 pt-2 pb-4'
                        >{isActive ? <FaPause /> : <FaPlay />}
                        </button>
                        <div className='text-3xl'>
                            <button onClick={handleResetClock}
                                className='px-2 rounded hover:bg-red-400 hover:text-black sm:hover:scale-110 sm:hover:bg-transparent sm:hover:text-white transition-all'
                            ><LuTimerReset className='font-bold' />
                            </button>
                            <button onClick={() => setShowSetting(true)}
                                className='px-2 rounded hover:bg-red-400 hover:text-black sm:hover:scale-110 sm:hover:bg-transparent sm:hover:text-white transition-all'
                            ><IoMdSettings />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timer