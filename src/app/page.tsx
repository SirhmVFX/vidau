import Brands from "@/components/Brands";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeatureSection from "@/components/FeatureSection";
import FeatureSection2 from "@/components/FeatureSection2";
import FeatureSection3 from "@/components/FeatureSection3";
import FeatureSection4 from "@/components/FeatureSection4";
import FeatureSection5 from "@/components/FeatureSection5";
import FeatureSection6 from "@/components/FeatureSection6";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return <div>
    <Herosection />
    <FeatureSection />
    <FeatureSection2 />
    <FeatureSection3 />
    <FeatureSection4 />
    <FeatureSection5 />
    <FeatureSection6 />
    <PricingSection />
    <Brands />
    <TestimonialSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>;
}
