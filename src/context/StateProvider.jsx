import { createContext, useEffect, useState } from 'react'

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [time, setTime] = useState(550);
    const [activeTab, setActiveTab] = useState(0)
    const [isActive, setIsActive] = useState(false);
    const [baseTimeDuration, setBaseTimeDuration] = useState({
        focus: 26 * 60,
        shortBreak: 1 * 60,
        longBreak: 15 * 60,
    });
    const [initTime, setInitTime] = useState(0);
    const [showSetting, setShowSetting] = useState(false);

    useEffect(() => {
        setIsActive(false);
        switch (activeTab) {
            case 0:
                setTime(baseTimeDuration.focus)
                setInitTime(baseTimeDuration.focus)
                break;
            case 1:
                setTime(baseTimeDuration.shortBreak)
                setInitTime(baseTimeDuration.shortBreak)
                break;
            case 2:
                setTime(baseTimeDuration.longBreak)
                setInitTime(baseTimeDuration.longBreak)
                break;
            default:
                break;
        }
    }, [activeTab, baseTimeDuration]);

    return (
        <StateContext.Provider
            value={{
                time, setTime,
                activeTab, setActiveTab,
                isActive, setIsActive,
                baseTimeDuration, setBaseTimeDuration,
                initTime, setInitTime,
                showSetting, setShowSetting,
            }}
        >{children}
        </StateContext.Provider>
    )
}

export default StateProvider;