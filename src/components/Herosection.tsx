import Image from "next/image";
import { IoIosMore } from "react-icons/io";
import ArrowButton from "./ArrowButton";
import { Link } from "./Icons";

function Herosection() {
  const supportedPlatforms = [
    { id: 1, platform: "/assets/p1.png" },
    { id: 2, platform: "/assets/p2.png" },
    { id: 3, platform: "/assets/p3.png" },
    { id: 4, platform: "/assets/p4.png" },
    { id: 5, platform: "/assets/p5.png" },
    { id: 6, platform: "/assets/p6.png" },
    { id: 7, platform: "/assets/p7.png" },
    { id: 8, platform: "/assets/p8.png" },
  ];

  const heroImages = [
    { id: 1, image: "/assets/c1.png" },
    { id: 2, image: "/assets/c2.png" },
    { id: 3, image: "/assets/c3.png" },
    { id: 4, image: "/assets/c4.png" },
    { id: 5, image: "/assets/c5.png" },
    { id: 6, image: "/assets/c6.png" },
    { id: 7, image: "/assets/c7.png" },
  ];

  const compatiblePlatforms = [
    { id: 1, platform: "/assets/a1.png" },
    { id: 2, platform: "/assets/a2.png" },
    { id: 3, platform: "/assets/a3.png" },
    { id: 4, platform: "/assets/a4.png" },
    { id: 5, platform: "/assets/a5.png" },
    { id: 6, platform: "/assets/a6.png" },
    { id: 7, platform: "/assets/a7.png" },
    { id: 8, platform: "/assets/a8.png" },
    { id: 9, platform: "/assets/a9.png" },
    { id: 10, platform: "/assets/a10.png" },
    { id: 11, platform: "/assets/a11.png" },
    { id: 12, platform: "/assets/a12.png" },
    { id: 13, platform: "/assets/a13.png" },
    { id: 14, platform: "/assets/a14.png" },
  ];
  return (
    <>
      <div className="w-full md:h-[100vh] h-screen relative flex justify-center">
        <div className="w-full h-[100vh] absolute">
          <Image
            src={"/assets/bg.png"}
            width={10000}
            height={10000}
            alt="bg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:p-0 p-8 pt-28  absolute md:top-1/2 md:w-[70%] mx-auto transform md:-translate-y-1/2 flex flex-col items-center gap-4 ">
          <h1 className="md:text-[62px] text-[32px] md:w-[70%] text-center font-semibold md:leading-[64px] leading-[42px]">
            AI Video Ad Agent <br /> For Winning{" "}
            <span className="text-[#3459FF]">Video Promo</span>
          </h1>
          <p className="text-[#393939] text-center text-sm md:text-base">
            Generate high-converting  video ad creatives  in minutes, no editing
            skills needed.
          </p>
          <div className="bg-white rounded-full p-2 pl-3 flex items-center md:w-[60%] w-full justify-between">
            <div className="flex items-center gap-2 w-[65%]">
             <Link />
              <input
                type="text"
                placeholder="Youtube/Amazon/Shopify/Tiktok/Eb...."
                className="border-none w-full outline-none text-[12px] bg-transparent"
              />
            </div>

            <div className="md:block hidden">
            <ArrowButton
              text="Generate your first ad for free"
              bgColor="#3459FF"
            />
            </div>

            
          </div>
          <div className="md:hidden block">
            <ArrowButton
              text="Generate your first ad for free"
              bgColor="#3459FF"
            />
            </div>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="text-[15px] font-bold">Supported platforms</p>
            <div className="flex items-center gap-2">
            {supportedPlatforms.map((platform) => (
              <Image
                key={platform.id}
                src={platform.platform}
                width={1000}
                height={1000}
                alt="platform"
                className="w-6"
              />
            ))}

                </div>            <div>
              <IoIosMore />
            </div>
          </div>

          <div className="md:h-[200px] h-[100px] flex items-center gap-2 relative">
          <div className="h-full w-[400px] bg-linear-90 from-[#fFF] to-transparent absolute left-0 top-0 bottom-0 rounded-sm md:block hidden"></div>

            {heroImages.map((image) => (
              <Image
                key={image.id}
                src={image.image}
                width={1000}
                height={1000}
                alt="image"
                className={` w-full h-full object-contain ${image.id === 2 || 4 ? "hidden md:block" : ""}`}
              />
            ))}

          <div className="h-full w-[400px] bg-linear-90 from-transparent to-[#fff] absolute -right-4 top-0 bottom-0 rounded-sm md:block hidden"></div>

          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-[14px] font-bold">
              Compatible with these platforms
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap ">
              {compatiblePlatforms.map((platform) => (
                <Image
                  key={platform.id}
                  src={platform.platform}
                  width={1000}
                  height={1000}
                  alt="platform"
                  className="w-auto h-[20px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
