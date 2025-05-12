"use client"
import { useState } from "react";

function ToggleComponent() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="p-2 rounded-xl bg-[#3658FF] flex items-center justify-center w-fit">
            
           <button className={`transition-all cursor-pointer py-2 px-6 rounded-xl ${!isYearly ? 'bg-[#3459FF] text-white' : 'bg-[#ffffff] text-[#000]'}`} onClick={() => setIsYearly(true)}>Monthly</button>
           <button className={`transition-all cursor-pointer py-2 px-6 rounded-xl ${isYearly ? 'bg-[#3459FF] text-white' : 'bg-[#ffffff] text-[#000]'}`} onClick={() => setIsYearly(false)}>Yearly <span className="font-semibold text-[#F59E0B]">50% Off</span></button>
        </div>
    );
}

export default ToggleComponent;