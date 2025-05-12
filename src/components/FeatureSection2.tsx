import Image from "next/image"
import ArrowButton from "./ArrowButton"

function FeatureSection2() {
    const images = [
        {id: 1, image: "/assets/av1.png"},
        {id: 2, image: "/assets/av2.png"},
        {id: 3, image: "/assets/av3.png"},
        {id: 4, image: "/assets/av4.png"},
        {id: 5, image: "/assets/av5.png"},
        {id: 6, image: "/assets/av6.png"},
        {id: 7, image: "/assets/av7.png"},

    ]
    return (
        <>
        <div className="bg-linear-180 from-[#3353F9] to-[#6A3BFF] h-[80vh] pt-[80px] px-[80px] flex  justify-center relative overflow-hidden">
            <div className=" flex flex-col justify-between items-start pb-[100px]">
                <div>
                <h1 className="text-[60px] text-white font-semibold leading-[65px]">Create UGC Video Ads with VidAU AI Avatars</h1>
                <p className="text-white">Use VidAU&apos;s AI avatar as your AI UGC creator to create the perfect UGC style video promo.</p>
                </div>
                <div className="h-[120px] flex gap-10 items-center absolute left-0 pt-6 -translate-y-[-185%] z-50 ">
                    {images.map((image, index) => (
                        <Image 
                            key={image.id} 
                            src={image.image} 
                            width={10000} 
                            height={10000} 
                            alt="feature" 
                            className={`${index === 5 ? 'w-[170%] h-[170%]' : 'w-full h-full'}`}
                        />
                    ))}
                </div>
                <ArrowButton text=" Get AI UGC Video" bgColor="#000" />
                
            </div>
            <div className="w-[1200px] relative ">
                <Image src="/assets/phone.png" width={10000} height={10000} alt="feature" className="" />
                <div className="absolute top-0 left-0 w-full h-full bg-linear-180 from-0%-[#3459FF] to-[#6A3BFF]"></div>
            </div>

        </div>
        </>
    )
}

export default FeatureSection2 