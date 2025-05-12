"use client"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"

function FAQSection() {
    const [openId, setOpenId] = useState<number | null>(null)

    const faqs = [
        {id: 1, question: "Can I use VidAU AI to create social media video ads?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 2, question: "How does VidAU AI improve ad performance?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 3, question: "Can I request user-generated content (UGC)-style ads with VidAU AI?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 4, question: "What’s the ideal length for an AI-generated ad?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 5, question: "Can I customize AI video ads for different platforms?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 6, question: "Does VidAU AI create product demo videos?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 7, question: "Can I add my brand’s logo, fonts, and colors to the AI video ads?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 8, question: "How does VidAU AI ensure ad quality?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 9, question: "Can I edit my AI-generated video ads?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."},
        {id: 10, question: "How do I get started with VidAU AI?", answer: "Yes! VidAU AI creates video ads for TikTok, YouTube, Instagram, Facebook, and more, ensuring they follow platform-specific best practices for dimensions, duration, and engagement."}
    ]

    const handleClick = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    return(
        <div className="p-[100px] bg-[#fcfcfc] flex flex-col items-center gap-8">
            <h1 className="text-[40px] text-center font-semibold">Frequently Asked <span>Questions</span></h1>

            <div className="w-[70%] flex flex-col gap-4">
                {faqs.map((item) => (
                   <div 
                        key={item.id} 
                        onClick={() => handleClick(item.id)} 
                        className="px-[25px] py-[14px] transition-all bg-[#E1E4EB] border-[3px] border-white rounded-2xl cursor-pointer"
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="text-[16px] font-medium">{item.question}</h1>

                            <div className="bg-[#3353F9] rounded-full p-2 text-white">
                                {openId === item.id ? <FaMinus  className="text-white text-xs"/> : <FaPlus className="text-white text-xs" />}
                            </div>
                        </div>
                        {openId === item.id && (
                            <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
                        )}
                   </div> 
                ))}
            </div>
        </div>
    )
}

export default FAQSection