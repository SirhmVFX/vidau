import ToggleComponent from "./ToggleComponent";
import PricingCard from "./PricingCard";

function PricingSection() {
  const pricingPlans = [
    {
      plan: "Free",
      price: "$0",
      period: "/month",
      mainFeatures: [
        { text: "10 Minutes of Video/Mon" },
        { text: "10 Minutes of Video/Mon" },
      ],
      additionalFeatures: [
        { text: "10 Minutes of Video/Mon" },
        { text: "10 Minutes of Video/Mon" },
        { text: "10 Minutes of Video/Mon" },
        { text: "10 Minutes of Video/Mon" },
      ],
    },
    {
      plan: "Pro",
      price: "$29",
      period: "/month",
      mainFeatures: [
        { text: "30 Minutes of Video/Mon" },
        { text: "Unlimited exports" },
      ],
      additionalFeatures: [
        { text: "AI Script Writing" },
        { text: "AI Voice Over" },
        { text: "Premium Templates" },
        { text: "Priority Support" },
      ],
      isPopular: true,
    },
    // Add more plans as needed
  ];

  return (
    <>
      <div className="bg-[#fcfcfc] p-[100px] md:flex flex-col items-center gap-8 hidden">
        <h1 className="text-center text-[36px]">
          The quickest way to start a successful video promo
        </h1>

        <ToggleComponent />

        <div className="grid grid-cols-4 gap-4 w-full">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PricingSection;
