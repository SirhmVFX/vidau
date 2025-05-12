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
        <div className="bg-linear-180 from-[#3353F9] to-[#6A3BFF] md:h-[80vh] h-fit md:pt-[80px] md:px-[80px] px-6 pt-[70px] flex md:flex-row flex-col  md:justify-center relative overflow-hidden">
            <div className=" flex flex-col justify-between items-start md:pb-[100px]">
                <div className="space-y-[20px]">
                <h1 className="md:text-[60px] text-[30px] md:leading-[65px] leading-[30px] text-white font-semibold ">Create UGC Video Ads with VidAU AI Avatars</h1>
                <p className="text-white">Use VidAU&apos;s AI avatar as your AI UGC creator to create the perfect UGC style video promo.</p>
                </div>
                <div className="h-[120px] flex gap-10 items-center absolute left-0 pt-6 -translate-y-[-185%] md:z-50 ">
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
            <div className="md:w-[1200px] w-full relative ">
                <Image src="/assets/phone.png" width={10000} height={10000} alt="feature" className="" />
                <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-linear-180 from-0%-[#3459FF] to-[#6A3BFF]"></div>
            </div>

        </div>
        </>
    )
}

export default FeatureSection2 