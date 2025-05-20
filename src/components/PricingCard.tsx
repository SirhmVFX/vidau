import { FaCheckCircle } from "react-icons/fa";

interface Feature {
  text: string;
}

interface PricingCardProps {
  plan: string;
  price: string;
  period: string;
  mainFeatures: Feature[];
  additionalFeatures?: Feature[];
  buttonText?: string;
  isPopular?: boolean;
}

function PricingCard({
  plan,
  price,
  period,
  mainFeatures,
  additionalFeatures,
  buttonText = "Get started",
  isPopular = false,
}: PricingCardProps) {
  return (
    <div className={`${isPopular ? "bg-[#3353F9] text-white" : "bg-white text-[#3353F9]"}  cursor-pointer transition-all shadow-md p-[40px] rounded-[20px] `}>
      <div className="px-4 py-1 border border-[#3353F9] rounded-[10px] w-fit ">
        <p className="text-sm text-[#3353F9] ">{plan}</p>
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
        {mainFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaCheckCircle className="text-[#3353f9]/50 " />
            <p className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-xs font-semibold text-[#3353f9] `}>
              {feature.text}
            </p>
          </div>
        ))}

        <div className="flex flex-col gap-4 pt-4">
          <h1 className="text-sm font-semibold ">
            Main Features
          </h1>
          {additionalFeatures?.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-[#3353f9]/50 " />
              <p className={`${isPopular ? "text-white" : "text-[#3353F9]"} text-xs font-semibold text-[#3353f9] `}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;