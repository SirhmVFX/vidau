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
            name: "Chat GPT",
            description: "Script Writing",
            price: "$20/mo",
            color: "#AFF4C6",
            img: "/assets/ap2.png",
        },
        {
            id: 3,
            name: "Chat GPT",
            description: "Script Writing",
            price: "$20/mo",
            color: "#AFF4C6",
            img: "/assets/ap3.png",
        },
        {
            id: 4,
            name: "Chat GPT",
            description: "Script Writing",
            price: "$20/mo",
            color: "#AFF4C6",
            img: "/assets/ap4.png",
        },
        {
            id: 5,
            name: "Chat GPT",
            description: "Script Writing",
            price: "$20/mo",
            color: "#AFF4C6",
            img: "/assets/ap5.png",
        },
        {
            id: 6,
            name: "Chat GPT",
            description: "Script Writing",
            price: "$20/mo",
            color: "#AFF4C6",
            img: "/assets/ap6.png",
        },
        
    ]

    const todo = ["Script Writing", "Video Editing", "AI UGC Creators"]

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
      <div className="p-[100px] bg-[#fcfcfc] flex flex-col gap-6">
        <h1 className="text-[40px] font-semibold leading-[44px] text-center"> <span className="text-[#3353F9]">VidAU.AI</span> <br /> Save money <br /> Ditch your other tools</h1>

        <div className="flex w-full">
            <div className="p-4 bg-white rounded-[10px] shadow-md w-3/6 -rotate-6">
                <div className="grid grid-cols-3 gap-3">
                {apps.map((app) => (
                    <div key={app.id} className="p-3 bg-[#0000000A] rounded-[10px]"> 
                        <div className="p-3 rounded-[8px] " style={{backgroundColor: app.color}}>
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

            </div>

            <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center shadow-md">
                <h1>vs</h1>
            </div>

            <div className="bg-linear-180 from-[#3353F9] to-[#6A3BFF] p-[30px] flex flex-col gap-2 items-center rounded-[20px] w-3/6 rotate-6">
                <Image src="/assets/logo2.png" alt="app1" width={1000} height={1000} className="w-[150px]" />
                <div className="flex gap-2 flex-wrap">
                    {todo.map((todo) => (
                        <div className="bg-white rounded-full p-2" key={todo}><p className="text-[10px] font-bold text-[#3353F9]">{todo}</p></div>
                    ))}
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
