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
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 3,
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 4,
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 5,
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 6,
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 7,
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
    {
      id: 8,
      tool: "Product URL to Video",
      icon: <BiLink color="#006AFF" className="opacity-60" />,
    },
  ];

  const resources = [
    { id: 1, tool: "Product URL to Video" },
    { id: 2, tool: "Product URL to Video" },
    { id: 3, tool: "Product URL to Video" },
    { id: 4, tool: "Product URL to Video" },
    { id: 5, tool: "Product URL to Video" },
    { id: 6, tool: "Product URL to Video" },
    { id: 7, tool: "Product URL to Video" },
    { id: 8, tool: "Product URL to Video" },
  ];

  const about = [
    { id: 1, tool: "Product URL to Video" },
    { id: 2, tool: "Product URL to Video" },
    { id: 3, tool: "Product URL to Video" },
    { id: 4, tool: "Product URL to Video" },
  ];
  return (
    <>
      <div className="p-[120px] bg-[#00041F]">
        <div className="flex gap-10">
          <div className="flex flex-col gap-4 w-2/5 ">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-[200px]"
            />
            <p className="text-white">
              VidAU AI Video & Audio Creator:Generate Winning Marketing Videos
              Using VidAU AI in Minutes
            </p>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-white" />
              <FaInstagram className="text-white" />
              <FaYoutube className="text-white" />
              <FaX className="text-white" />
              <FaTiktok className="text-white" />
              <FaLinkedin className="text-white" />
            </div>
          </div>
          <div className="w-1/5">
            <h1 className="text-[#3459FF] font-semibold text-xl">ToolBox</h1>
            <div className="flex flex-col gap-2">
              {toolbox.map((item) => (
                <Link
                  href={"/"}
                  key={item.id}
                  className="flex items-center gap-4"
                >
                  <div>{item.icon}</div>
                  <p className="text-white font-semibold">{item.tool}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-1/5">
            <h1 className="text-[#3459FF] font-semibold text-xl">Resources</h1>
            <div className="flex flex-col gap-2">
              {resources.map((item) => (
                <Link
                  key={item.id}
                  href="/"
                  className="text-white font-semibold"
                >
                  {item.tool}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-1/5">
            <h1 className="text-[#3459FF] font-semibold text-xl">Resources</h1>
            <div className="flex flex-col gap-2">
              {about.map((item) => (
                <Link
                  key={item.id}
                  href="/"
                  className="text-white font-semibold"
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
