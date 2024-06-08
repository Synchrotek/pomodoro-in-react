import React, { useState } from 'react'

const tabs = [
    "Focus", "Short Break", "Long Break"
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className='bg-[#373A40] h-16 sm:min-w-[70%] min-w-[85%] mt-5 rounded-3xl flex justify-evenly gap-2 p-2'>
            {tabs.map((tab, index) => (
                <button key={index}
                    className={`w-1/2 rounded-full font-semibold sm:text-xl text-xs ${activeTab === index && 'bg-orange-600'}`}
                    onClick={() => setActiveTab(index)}
                > {tab}
                </button>
            ))}
        </div >
    )
}

export default Tabs