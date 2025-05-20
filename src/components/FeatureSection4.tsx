import Image from "next/image";
import ArrowButton from "./ArrowButton";

function FeatureSection4() {
  const features = [
    {
      id: 1,
      title: "AI Scripts Writer",
      description:
        "Leverage the well-trained UGC scripts writer using GPT-4o to craft viral video scripts designed to drive conversions.",
    },
    {
      id: 2,
      title: "AI Video Remix",
      description:
        "Handle complex cutting, rearranging, enhancing and editing tasks automatically, saving time and efforts.",
    },
    {
      id: 3,
      title: "AI Text to Speech",
      description:
        "Generate alluring UGC voice overs that sell products. VidAU AI text-to-speech turns text prompts into impactful audio.",
    },
    {
      id: 4,
      title: "50+ Language Supported",
      description:
        "Break language barriers and reach a global audience. VidAU AI video generator supports over 50 languages.",
    },
  ];
  return (
    <>
      <div className="bg-linear-180 from-[#3459FF] to-[#6A3BFF] md:p-[100px] px-6 py-[70px] space-y-6 flex flex-col items-center">
        <p className="text-white text-[24px] font-semibold ">
          The Smartest Video Ad AI Agent for Video Marketing
        </p>
        <div className="flex md:flex-row flex-col gap-4 items-center">
          <div className="bg-white rounded-[20px] flex items-center">
            <div className="md:px-[40px] md:w-[70%] md:py-[0px] py-[20px] px-[20px]">
              <h1 className="text-[18px] font-semibold text-[#3459FF]">
                AI Video Ads
              </h1>
              <p className="text-[16px] text-[#444]">
                Generate winning video ads with VidAU AI video admaker to
                showcase your products&apos; unique selling points to the target
                audience.
              </p>
            </div>

            <div className="h-[200px] md:block hidden">
              <Image
                src="/assets/ft1.png"
                alt="feature-4-1"
                width={1000}
                height={1000}
                className="w-full h-full object-right-top"
              />
            </div>
          </div>
          <div className="bg-white rounded-[20px] flex items-center">
            <div className="md:px-[40px] md:w-[70%] md:py-[0px] py-[20px] px-[20px]">
              <h1 className="text-[18px] font-semibold text-[#3459FF]">
                AI UGC Creator 
              </h1>
              <p className="text-[16px] text-[#444]">
                Leverage the well-trained UGC scripts writer using GPT-4o to
                craft viral video scripts designed to drive conversions.
              </p>
            </div>

            <div className="h-[200px] md:block hidden">
              <Image
                src="/assets/ft2.png"
                alt="feature-4-1"
                width={1000}
                height={1000}
                className="w-full h-full object-right-top"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white md:p-[40px] p-[20px] rounded-[20px] flex flex-col gap-2"
            >
              <h1 className="text-[18px] font-semibold text-[#3459FF]">
                {feature.title}
              </h1>
              <p className="text-[16px] text-[#444]">{feature.description}</p>
            </div>
          ))}
        </div>
        <ArrowButton text="Get started for free" bgColor="#000" />
      </div>
    </>
  );
}

export default FeatureSection4;
