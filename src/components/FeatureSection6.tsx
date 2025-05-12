import Image from "next/image"

function FeatureSection6() {
    return(
        <>
        <div className="bg-linear-180 from-[#3353F9] to-[#6A3BFF] md:p-[100px] px-6 p-[40px] flex md:flex-row flex-col items-center gap-4">
            <Image src="/assets/g1.png" width={10000} height={10000} alt="feature" className=" h-full w-[300px]" />
            <div className="space-y-6">
                <h1 className="text-white text-4xl font-semibold text-center">The quickest way to start a successful video promo</h1>
                <p className="text-white text-center text-sm md:w-[60%] mx-auto">Captivate your audience and improve your engagement rate using VidAU’s Video Promo ads maker for maximum conversion.</p>
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-5xl font-semibold">10x</h1>
                        <p className="text-white text-center text-sm">Faster Production</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-5xl font-semibold">5%</h1>
                        <p className="text-white text-center text-sm">of Traditional Costs</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-5xl font-semibold">3x</h1>
                        <p className="text-white text-center text-sm">Conversion Rates Improvements</p>
                    </div>
                </div>
            </div>
            <Image src="/assets/g2.png" width={10000} height={10000} alt="feature" className="w-[300px] h-full " />
        </div>
        </>
    )
}
export default FeatureSection6