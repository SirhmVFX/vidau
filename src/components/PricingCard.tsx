import { FaCheckCircle } from "react-icons/fa";
import { Star } from "./Icons";

interface Feature {
  text: string;
}

interface PricingCardProps {
  plan: string;
  price: string;
  period: string;
  mainFeatures?: Feature[];
  additionalFeatures?: Feature[];
  buttonText?: string;
  isPopular?: boolean;
  promo?: boolean;
}

function PricingCard({
  plan,
  price,
  period,
  mainFeatures,
  additionalFeatures,
  buttonText = "Get started",
  isPopular = false,
  promo = false,
}: PricingCardProps) {
  return (
    <div className={`${isPopular ? "bg-[#3353F9] text-white" : "bg-white text-[#3353F9]"} relative  cursor-pointer transition-all shadow-md p-[40px] rounded-[20px] `}>
      {promo ? <div className="flex bg-linear-90 from-[#F68B2E] to-[#F6BB5C] items-center gap-2 p-4 absolute top-0 right-0 w-fit rounded-es-[20px] rounded-se-[20px]">
        <Star />
        <p className={` text-sm text-[#fff] `}>50% Off</p>
      </div> : null}
      <div className={`${isPopular ? "border-[#fff]" : "border-[#3353F9]"} px-4 py-1 border  rounded-[10px] w-fit `}>
        <p className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-sm text-[#3353F9] `}>{plan}</p>
      </div>


      <div className="flex items-center gap-4 pb-20">
        <h1 className={`${isPopular ? "text-white" : "text-[#3353F9]"} font-bold text-[45px] text-[#3353F9] `}>
          {price}
        </h1>
        <p className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-sm text-[#3353F9] `}>{period}</p>
      </div>

      <button className={`${isPopular ? "bg-linear-90 from-[#F68B2E] to-[#F6BB5C]" : "bg-[#3353F9] text-white"} py-3 w-full text-white shadow-sm  rounded-[20px] `}>
        {buttonText}
      </button>

      <div className="flex flex-col gap-4 py-6">
        { mainFeatures?.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaCheckCircle className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-[#3353f9]/50 `} />
            <p className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-xs font-semibold text-[#3353f9] `}>
              {feature.text}
            </p>
          </div>
        ))}

        {additionalFeatures ? <div className="flex flex-col gap-4 pt-4">
          <h1 className="text-sm font-semibold ">
            Main Features
          </h1>
           {additionalFeatures?.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheckCircle className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-[#3353f9]/50 `} />
              <p className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-xs font-semibold text-[#3353f9] `}>
                {feature.text}
              </p>
            </div>
          ))}
        </div> : null}
      </div>
    </div>
  );
}

export default PricingCard;