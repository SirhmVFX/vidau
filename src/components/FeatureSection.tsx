import Image from "next/image"
import ArrowButton from "./ArrowButton"

function FeatureSection() {
    const featureImage = [
        {id: 1, image: "/assets/f1.png"},
        {id: 2, image: "/assets/f2.png"},
        {id: 3, image: "/assets/f3.png"},
        {id: 4, image: "/assets/f4.png"},
        {id: 5, image: "/assets/f5.png"},
        {id: 6, image: "/assets/f6.png"},
    ]
    return(
        <>
        <div className="w-full md:h-[80vh] h-screen p-[20px] flex flex-col gap-4 items-center justify-center bg-[#fcfcfc]">
            <h1 className="md:text-[40px] text-[30px] md:leading-[45px] leading-[30px]">Create Winning Video Ads with VidAU AI Agent</h1>
            <p>Create engaging video ads for product promotion with VidAU AI video generator.</p>
            <div className="flex items-center justify-center gap-8 h-[360px] md:overflow-hidden overflow-x-scroll">
                {featureImage.map((item) => (
                    <Image key={item.id} src={item.image} width={10000} height={10000} alt="feature" className="w-full h-full" />
                ))}
            </div>
            <ArrowButton text=" Get started for free" bgColor="#3459FF" />

            

        </div>
        </>
    )
}

export default FeatureSection