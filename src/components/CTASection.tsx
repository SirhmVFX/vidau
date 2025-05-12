import Image from "next/image"
import ArrowButton from "./ArrowButton"

function CTASection() {
    return (
        <>
        <div className="p-[100px] bg-[#fcfcfc]">
            <div className="py-[20px] px-[40px] w-[80%] mx-auto rounded-[30px] bg-linear-90 from-[#3459FF] to-[#6A3BFF] flex items-center justify-between">
                <div className="w-[50%] space-y-[20px]">
                    <h1 className="text-[40px] text-white leading-[50px]">Create Winning Video Ads in Minutes with VidAU AI</h1>
                    <ArrowButton text="Get started for free" bgColor="#000" />
                </div>
                <Image src="/assets/cta.png" width={10000} height={10000} alt="cta" className="h-[280px] w-fit" />
                
            </div>
        </div>
        </>
    )
}

export default CTASection