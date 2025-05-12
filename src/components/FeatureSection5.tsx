import Image from "next/image";

function FeatureSection5() {
    const apps = [
        {
            id: 1,
            name: "Chat GPT",
            description: "Script Writing",
            price: "$20/mo",
            color: "#AFF4C6",
            img: "/assets/ap1.png",
        },
        {
            id: 2,
            name: "Synthesia",
            description: "Synthesia",
            price: "$29/mo",
            color: "#D0BCFF",
            img: "/assets/ap2.png",
        },
        {
            id: 3,
            name: "Capcut",
            description: "Video Editing",
            price: "$9.99/mo",
            color: "#fff",
            img: "/assets/ap3.png",
        },
        {
            id: 4,
            name: "Runway",
            description: "Video Generator",
            price: "$15/mo",
            color: "#24DD7D",
            img: "/assets/ap4.png",
        },
        {
            id: 5,
            name: "Adspy",
            description: "Creative Analytics",
            price: "$149/mo",
            color: "#3459FF",
            img: "/assets/ap5.png",
        },
        {
            id: 6,
            name: "Fiverr",
            description: "UGC Creations",
            price: "$200/mo",
            color: "#00AF54",
            img: "/assets/ap6.png",
        },
        
    ]

    const todo = ["Script Writing", "Video Editing", "AI UGC Creators", "Creative beliefes", "Advance Research", "Creative Analytics", "VOiceOver", "Video to Text", "Image to Video", "Creative Storage", "Video Downloads", "Watermark/Subtitle Remover", "Video Enhancer"]

    const feat = [
        {
            id:1,
            icon: "/assets/ic1.png",
            title: "Save money",
            desc: "No need to pay for multiple subscriptions."
        },
        {
            id:2,
            icon: "/assets/ic2.png",
            title: "Save money",
            desc: "No need to pay for multiple subscriptions."
        },
        {
            id:3,
            icon: "/assets/ic3.png",
            title: "Save money",
            desc: "No need to pay for multiple subscriptions."
        },
        {
            id:4,
            icon: "/assets/ic4.png",
            title: "Save money",
            desc: "No need to pay for multiple subscriptions."
        }
    ]
  return (
    <>
      <div className="md:p-[100px] px-6 py-[70px] bg-[#fcfcfc] flex flex-col gap-10">
        <h1 className="md:text-[40px] text-[34px] font-semibold md:leading-[44px] leading-[30px] text-center"> <span className="text-[#3353F9]">VidAU.AI</span> <br /> Save money <br /> Ditch your other tools</h1>

        <div className="flex flex-col md:flex-row md:gap-0 gap-6 md:items-start items-center w-full">
            <div className=" bg-white rounded-[10px] shadow-md w-full md:w-3/6 md:-rotate-6">
                <div className="grid md:grid-cols-3 grid-cols-2 gap-3 p-4">
                {apps.map((app) => (
                    <div key={app.id} className="p-3 bg-[#0000000A] rounded-[10px]"> 
                        <div className="p-3 rounded-[8px] flex items-center justify-center " style={{backgroundColor: app.color}}>
                            <Image src={app.img} alt={app.name} className="w-[40px] " width={1000} height={1000} />
                        </div>

                        <div>
                            <h1 className="text-[#444444] text-[11px] font-bold">{app.name}</h1>
                            <div className="flex items-center justify-between">
                                <p className="text-[9px] text-[#444444]">{app.description}</p>
                                <p className="font-bold text-[11px] text-[#444444]">{app.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                <div className="flex flex-col items-center p-[20px] border-t-[1px] border-[#444444]">
                    <h1 className="md:text-[28px] text-[20px] text-[#444444] ">All these = <span className="font-bold">$222.99+ / month</span></h1>
                    <h1 className="text-[11px] text-[#444444]">Save big and ditch your other tools</h1>
                </div>

            </div>

            <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-md">
                <h1>vs</h1>
            </div>

            <div className="bg-linear-180 from-[#3353F9] to-[#6A3BFF] md:p-[30px] px-4 py-6 flex flex-col gap-3 items-center rounded-[20px] md:w-3/6 w-full md:rotate-6">
                <Image src="/assets/logo2.png" alt="app1" width={1000} height={1000} className="w-[150px]" />
                <div className="flex gap-2 flex-wrap justify-center">
                    {todo.map((todo) => (
                        <div className="bg-white rounded-full p-2" key={todo}><p className="md:text-[12px] text-[10px] font-bold text-[#3353F9]">{todo}</p></div>
                    ))}
                </div>
                <div className="flex flex-col items-center p-[20px] ">
                    <h1 className="md:text-[28px] text-[20px] text-[#fff] ">All these = <span className="font-bold">$29 / month</span></h1>
                    <h1 className="text-[11px] text-[#fff]">Save big and ditch your other tools</h1>
                </div>
            </div>
        </div>

        <div className="w-[60%] flex flex-col gap-8 mx-auto">
            <div>
                <h1 className="text-[40px] text-center font-semibold leading-[44px]"><span className="text-[#3353F9]">All-in-One:</span> <br />
                Simple. Smart. AI Video Ad Agent</h1>
            </div>

            <div className="flex flex-col gap-4">
                {feat.map((feat) => (
                    <div key={feat.id} className="p-[30px] bg-white rounded-[30px] border border-[#3353F9] flex items-center gap-8 ">
                        <Image src={feat.icon} alt={feat.title} width={1000} height={1000} className="w-[40px]" />
                        <div>
                            <h1 className="text-[20px] text-[#3353F9] font-semibold">{feat.title}</h1>
                            <p className="text-[#444444]">{feat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default FeatureSection5;
