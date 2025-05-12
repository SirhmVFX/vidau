import Image from "next/image"
import { IoIosMore } from "react-icons/io";
import ArrowButton from "./ArrowButton";
import { FaLink } from "react-icons/fa6";

function Herosection () {
    const supportedPlatforms = [
        {id: 1, platform: "/assets/p1.png"},
        {id: 2, platform: "/assets/p2.png"},
        {id: 3, platform: "/assets/p3.png"},
        {id: 4, platform: "/assets/p4.png"},
        {id: 5, platform: "/assets/p5.png"},
        {id: 6, platform: "/assets/p6.png"},
        {id: 7, platform: "/assets/p7.png"},
        {id: 8, platform: "/assets/p8.png"},

    ]

    const heroImages = [
        {id: 1, image: "/assets/c1.png"},
        {id: 2, image: "/assets/c2.png"},
        {id: 3, image: "/assets/c3.png"},
        {id: 4, image: "/assets/c4.png"},
        {id: 5, image: "/assets/c5.png"},
        {id: 6, image: "/assets/c6.png"},
        {id: 7, image: "/assets/c7.png"},

    ]

    const compatiblePlatforms = [
        {id: 1, platform: "/assets/a1.png"},
        {id: 2, platform: "/assets/a2.png"},
        {id: 3, platform: "/assets/a3.png"},
        {id: 4, platform: "/assets/a4.png"},
        {id: 5, platform: "/assets/a5.png"},
        {id: 6, platform: "/assets/a6.png"},
        {id: 7, platform: "/assets/a7.png"},
        {id: 8, platform: "/assets/a8.png"},
        {id: 9, platform: "/assets/a9.png"},
        {id: 10, platform: "/assets/a10.png"},
        {id: 11, platform: "/assets/a11.png"},
        {id: 12, platform: "/assets/a12.png"},
        {id: 13, platform: "/assets/a13.png"},
        {id: 14, platform: "/assets/a14.png"},

    ]
    return (
        <>
        <div className="w-full h-[100vh] relative flex justify-center">
            <div className="w-full h-[100vh] absolute">
            <Image src={"/assets/bg.png"} width={10000} height={10000} alt="bg" className="w-full h-full object-cover" />

            </div>

            <div className="absolute top-1/2 w-[70%] mx-auto transform -translate-y-1/2 flex flex-col items-center gap-4 ">
                <h1 className="text-[62px] w-[70%] text-center font-semibold leading-[64px]">AI Video Ad Agent <br /> For Winning <span className="text-[#3459FF]">Video Promo</span></h1>
                <p className="text-[#393939]">Generate high-converting  video ad creatives  in minutes, no editing skills needed.</p>
                <div className="bg-white rounded-full p-2 flex items-center w-[60%] justify-between">
                    <div className="flex items-center gap-2 w-[65%]">
                    <FaLink />
                    <input type="text" placeholder="Youtube/Amazon/Shopify/Tiktok/Eb...." className="border-none w-full outline-none text-[12px] bg-transparent" />
                    </div>
                   
                    <ArrowButton text="Generate your first ad for free" bgColor="#3459FF" />
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[15px] font-bold">Supported platforms</p>
                    {supportedPlatforms.map((platform) => (
                        <Image key={platform.id} src={platform.platform} width={1000} height={1000} alt="platform" className="w-6" />
                    ))}
                    <div>
                    <IoIosMore />
                    </div>
                </div>

                <div className="h-[200px] flex items-center gap-2">
                    {heroImages.map((image) => (
                        <Image key={image.id} src={image.image} width={1000} height={1000} alt="image" className="w-full h-full object-contain" />
                    ))}
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-[14px] font-bold">Compatible with these platforms</p>
                    <div className="flex items-center gap-4">
                        {compatiblePlatforms.map((platform) => (
                            <Image key={platform.id} src={platform.platform} width={1000} height={1000} alt="platform" className="w-full h-[20px]" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Herosection