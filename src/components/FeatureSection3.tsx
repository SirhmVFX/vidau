import Image from "next/image";
import ArrowButton from "./ArrowButton";

function FeatureSection3() {
  return (
    <>
      <div className="hidden p-[100px]  md:flex flex-col items-center gap-10 bg-[#fcfcfc] ">
       <div className="flex gap-20">
       <div className="bg-[#FFD8E41F] p-[50px] rounded-[20px] flex flex-col gap-6">
          <div className="w-[100px] h-[100px]">
            <Image
              src="/assets/Danger.png"
              alt="Feature Image"
              width={1000}
              height={1000}
              className=" w-full h-full object-contain"
            />
          </div>

          <h1 className="text-[45px] leading-[50px] font-semibold">
            The Challenge of Traditional Video Ad Creation 
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-[16px]">
              <span className="text-[#3459FF] font-semibold ">High Cost</span> -
              High expenses for production, creative talent, research, and
              distribution, which may cost $200-300 per video.
            </p>
            <p className="text-[16px]">
              <span className="text-[#3459FF] font-semibold ">
                Time Consuming
              </span>{" "}
              – From strategy to scripting, filming, editing, and captions, the
              lengthy process makes it difficult to respond quickly to market
              trends.  
            </p>
            <p className="text-[16px]">
              <span className="text-[#3459FF] font-semibold ">
                Scalability Issues
              </span>{" "}
              –  Requires coordination among multiple teams and professionals,
              it’s hard to scale up based on this  labor-intensive model.
            </p>
          </div>
        </div>

        <div className="bg-[#EBFFEE] p-[50px] rounded-[20px] flex flex-col gap-6">
          <div className="w-[100px] h-[100px]">
            <Image
              src="/assets/Check.png"
              alt="Feature Image"
              width={1000}
              height={1000}
              className=" w-full h-full object-contain"
            />
          </div>

          <h1 className="text-[45px] leading-[50px] font-semibold">
          The Solution? VidAU AI Video Ad Maker!
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-[16px]">
              <span className="text-[#3459FF] font-semibold ">Cost Efficiency</span> -
              Reduce production costs by eliminating the need for full production teams and expensive equipment, resulting in $1-2 per video.
            </p>
            <p className="text-[16px]">
              <span className="text-[#3459FF] font-semibold ">
                Time Efficiency
              </span>{" "}
              – Produce videos in minutes, no waiting, no hassle, 90% faster production, allowing brands to quickly respond to market trends.
            </p>
            <p className="text-[16px]">
              <span className="text-[#3459FF] font-semibold ">
                Scalability 
              </span>{" "}
              –  No large teams or editing skills needed, just provide your product, AI automates scripting, voiceover, actor, editing and all the rest. 
            </p>
          </div>
        </div>
       </div>
       <ArrowButton text=" Get started for free" bgColor="#3459FF" />

       
      </div>
    </>
  );
}

export default FeatureSection3;
