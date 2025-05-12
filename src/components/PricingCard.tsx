import { FaCheckCircle } from "react-icons/fa";

interface Feature {
  text: string;
}

interface PricingCardProps {
  plan: string;
  price: string;
  period: string;
  mainFeatures: Feature[];
  additionalFeatures: Feature[];
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
  // isPopular = false,
}: PricingCardProps) {
  return (
    <div className="bg-white hover:bg-[#3353F9] hover:text-white cursor-pointer transition-all shadow-md p-[40px] rounded-[20px] group">
      <div className="px-4 py-1 border border-[#3353F9] rounded-[10px] w-fit group-hover:border-white">
        <p className="text-sm text-[#3353F9] group-hover:text-white">{plan}</p>
      </div>

      <div className="flex items-center gap-4 pb-20">
        <h1 className="text-semibold text-[40px] text-[#3353F9] group-hover:text-white">
          {price}
        </h1>
        <p className="text-sm text-[#3353F9] group-hover:text-white">{period}</p>
      </div>

      <button className="py-3 w-full text-white shadow-sm shadow-[#3353F9] rounded-[20px] bg-[#3353F9] group-hover:bg-linear-90 from-[#F68B2E] to-[#F6BB5C] group-hover:text-[#fff]">
        {buttonText}
      </button>

      <div className="flex flex-col gap-4 py-6">
        {mainFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaCheckCircle className="text-[#3353f9]/50 group-hover:text-white/50" />
            <p className="text-xs font-semibold text-[#3353f9] group-hover:text-white">
              {feature.text}
            </p>
          </div>
        ))}

        <div className="flex flex-col gap-4 pt-4">
          <h1 className="text-sm font-semibold group-hover:text-white">
            Main Features
          </h1>
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-[#3353f9]/50 group-hover:text-white/50" />
              <p className="text-xs font-semibold text-[#3353f9] group-hover:text-white">
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