import Image from "next/image"
import ArrowButton from "./ArrowButton"

function CTASection() {
    return (
        <>
        <div className="md:p-[100px] p-6 bg-[#fcfcfc]">
            <div className="md:py-[20px] md:px-[40px] p-[40px] md:w-[100%] mx-auto rounded-[30px] bg-linear-90 from-[#3459FF] to-[#6A3BFF] flex items-center justify-between">
                <div className="md:w-[50%] space-y-[20px]">
                    <h1 className="md:text-[40px] text-[26px] text-white md:leading-[50px] leading-[36px]">Create Winning Video Ads in Minutes with VidAU AI</h1>
                    <ArrowButton text="Get started for free" bgColor="#000" />
                </div>
                <Image src="/assets/cta.png" width={10000} height={10000} alt="cta" className="h-[280px] w-fit md:block hidden" />
                
            </div>
        </div>
        </>
    )
}

export default CTASection