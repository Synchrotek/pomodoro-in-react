import { createContext, useState } from 'react'

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [time, setTime] = useState(550);
    const [activeTab, setActiveTab] = useState(0)
    const [isActive, setIsActive] = useState(false);
    const [baseTimeDuration, setBaseTimeDuration] = useState({
        focus: 1500,
        shortBreak: 300,
        longBreak: 900,
    });

    return (
        <StateContext.Provider
            value={{
                time, setTime,
                activeTab, setActiveTab,
                isActive, setIsActive
            }}
        >{children}
        </StateContext.Provider>
    )
}

export default StateProvider;