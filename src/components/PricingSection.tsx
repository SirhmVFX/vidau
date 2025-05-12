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
        { text: "60s video" },
      ],
      additionalFeatures: [
        { text: "1AI Avatars Library" },
        { text: "Hooks & Ads Inspiration" },
        { text: "Text-to-Speech & Video Lip-Sync" },
        { text: "1Limited AI tools" },
      ],
    },
    {
      plan: "Starter",
      price: "$25",
      period: "/month",
      mainFeatures: [
        { text: "150 credits/month" },
        { text: "15 minutes of video/month" },
      ],
      additionalFeatures: [
        { text: "Premium Hooks & Ads Inspiration" },
        { text: "Premium Video Templates" },
        { text: "GPT-4o AI Script Writer" },
        { text: "P9:16, 16:9, and 1:1 aspect ratios" },
        { text: "Faster Generation Speed" },
      ],
      isPopular: true,
    },
    {
      plan: "Busines",
      price: "$45",
      period: "/month",
      mainFeatures: [
        { text: "400 credits/month" },
        { text: "40 minutes of video/month" },
        { text: "2 custom AI avatars" },
      ],
      additionalFeatures: [
        { text: "API access" },
        { text: "Commercial music library" },
        { text: "Premium stock footage" },
        { text: "Faster video processing speed" },
      ],
      isPopular: true,
    },

    {
      plan: "Busines",
      price: "$45",
      period: "/month",
      mainFeatures: [
        { text: "Custom credit plans" },
        { text: "Everything in Business Plan" },
        { text: "Volume-based discounts" },
        { text: "API support" },
        { text: "Custom Video Templates" },
        { text: "Customer Success Manager" },
        { text: "Fastest Generation Speed" },
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
