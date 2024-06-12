import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../context/StateProvider';
import { IoCloseSharp } from "react-icons/io5";

const SettingsModal = () => {
    const {
        baseTimeDuration, setBaseTimeDuration,
        showSetting, setShowSetting
    } = useContext(StateContext);

    const [localbaseTimeDuration, setLocalBaseTimeDuration] = useState({
        focus: baseTimeDuration.focus / 60,
        shortBreak: baseTimeDuration.shortBreak / 60,
        longBreak: baseTimeDuration.longBreak / 60,
    });

    useEffect(() => {
        setLocalBaseTimeDuration({
            focus: baseTimeDuration.focus / 60,
            shortBreak: baseTimeDuration.shortBreak / 60,
            longBreak: baseTimeDuration.longBreak / 60,
        })
    }, [showSetting, setShowSetting, baseTimeDuration]);

    // functions -----------------------------------------
    const handleChangeBaseTime = (e, type) => {
        setLocalBaseTimeDuration({
            ...localbaseTimeDuration,
            [type]: e.target.value,
        })
    }

    function validateValues(obj) {
        // Iterate over the values of the object
        for (let key in obj) {
            // Check if the current value is 600 or more
            if (obj[key] > 600 || obj[key] < 1) {
                return false;
            }
        }
        return true;
    }

    const handleApplyClick = () => {
        if (!validateValues(localbaseTimeDuration)) {
            return alert('Values should be between 1 - 600 minutes!');
        }
        setBaseTimeDuration({
            focus: localbaseTimeDuration.focus * 60,
            shortBreak: localbaseTimeDuration.shortBreak * 60,
            longBreak: localbaseTimeDuration.longBreak * 60,
        })
        setShowSetting(false);
        console.log(baseTimeDuration);
    }

    //  returnring functional component -----------
    return (
        <div className={`absolute top-0 h-screen w-screen bg-orange-500 bg-opacity-35 backdrop-blur-sm flex flex-col justify-center items-center transition-all 
        ${showSetting ? '-left-0' : '-left-full'}`}>
            <div className='w-[60%] bg-black rounded-md p-6'>
                <div className='flex justify-between w-full text-2xl border-b-2 py-2 pr-3'>
                    <h1>Setting</h1>
                    <button
                        onClick={() => setShowSetting(false)}
                    ><IoCloseSharp /></button>
                </div>
                <div className='grid gap-2 my-3 grid-cols-1 sm:grid-cols-2'>
                    <div>
                        <label htmlFor="focus" className="mb-1 text-sm  text-white font-medium">Focus :</label>
                        <input type="number" id="focus"
                            placeholder="Minutes . ." required
                            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus-within:outline-none placeholder-gray-400 w-full p-2.5 focus:border-red-400"
                            value={localbaseTimeDuration.focus}
                            onChange={e => handleChangeBaseTime(e, 'focus')}
                        />
                    </div>
                    <div>
                        <label htmlFor="short_break" className="mb-1 text-sm  text-white font-medium">Short Break :</label>
                        <input type="number" id="short_break"
                            placeholder="Minutes . ." required
                            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus-within:outline-none placeholder-gray-400 w-full p-2.5 focus:border-red-400"
                            value={localbaseTimeDuration.shortBreak}
                            onChange={e => handleChangeBaseTime(e, 'shortBreak')}
                        />
                    </div>
                    <div>
                        <label htmlFor="long_break" className="mb-1 text-sm  text-white font-medium">
                            Long Break :
                        </label>
                        <input type="number" id="long_break"
                            placeholder="Minutes . ." required
                            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus-within:outline-none placeholder-gray-400 w-full p-2.5 focus:border-red-400"
                            value={localbaseTimeDuration.longBreak}
                            onChange={e => handleChangeBaseTime(e, 'longBreak')}
                        />
                    </div>
                </div>
                <button onClick={handleApplyClick}
                    className='w-full bg-orange-600 text-xl my-2 p-2 rounded-md'>
                    Apply
                </button>
            </div>
        </div>
    )
}

export default SettingsModal