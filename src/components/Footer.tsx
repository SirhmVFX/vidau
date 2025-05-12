import Image from "next/image";
import Link from "next/link";
import { BiLink } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  const toolbox = [
    {
      id: 1,
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 2,
      tool: "Ai Avatars",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 3,
      tool: "Image to Video Ai",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 4,
      tool: "AI Text to Audio/TTS",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 5,
      tool: "Video Substitle Remover",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 6,
      tool: "AI Video Translate",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 7,
      tool: "Ai Video Subtitle Translator",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 8,
      tool: "View All AI Tools",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
  ];

  const resources = [
    { id: 1, tool: "Pricing" },
    { id: 2, tool: "Video Template Centre" },
    { id: 3, tool: "VidAU User Guide" },
    { id: 4, tool: "How to make an AI UGC Video" },
    { id: 5, tool: "Video Tips and Tricks" },
    { id: 6, tool: "Learning Centre" },
    { id: 7, tool: "Partners" },
    { id: 8, tool: "Affliate Program" },
    { id: 9, tool: "API" },
  ];

  const about = [
    { id: 1, tool: "Privacy Policy" },
    { id: 2, tool: "Terms of Service" },
    { id: 3, tool: "Refund Policy" },
  ];
  return (
    <>
      <div className="md:p-[120px] px-6 py-10 bg-[#00041F]">
        <div className="flex gap-10 flex-wrap">
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-2/5 ">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
            <p className="text-white text-center md:text-left">
              VidAU AI Video & Audio Creator:Generate Winning Marketing Videos
              Using VidAU AI in Minutes
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FaFacebook className="text-white" />
              <FaInstagram className="text-white" />
              <FaYoutube className="text-white" />
              <FaX className="text-white" />
              <FaTiktok className="text-white" />
              <FaLinkedin className="text-white" />
            </div>
          </div>
          <div className="w-full md:w-1/5">
            <h1 className="text-[#3459FF] font-semibold text-xl">ToolBox</h1>
            <div className="flex flex-col gap-2">
              {toolbox.map((item) => (
                <Link
                  href={"/"}
                  key={item.id}
                  className="flex items-center gap-4"
                >
                  <div>{item.icon}</div>
                  <p className="text-white md:font-semibold">{item.tool}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/5">
            <h1 className="text-[#3459FF] font-semibold text-xl">Resources</h1>
            <div className="flex flex-col gap-2">
              {resources.map((item) => (
                <Link
                  key={item.id}
                  href="/"
                  className="text-white md:font-semibold"
                >
                  {item.tool}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/5">
            <h1 className="text-[#3459FF] font-semibold text-xl">Resources</h1>
            <div className="flex flex-col gap-2">
              {about.map((item) => (
                <Link
                  key={item.id}
                  href="/"
                  className="text-white md:font-semibold"
                >
                  {item.tool}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="text-white text-xs">
          Copyright 2025 VidAU.ai .All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
