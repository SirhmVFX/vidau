"use client"
import Image from "next/image";
import SelectComponent from "./SelectComponent";
import Link from "next/link";
import Button from "./Button";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="fixed z-[99999] w-full bg-white flex md:justify-center justify-between items-center md:py-6 p-4 md:gap-[80px] gap-2">
        <Image
          src={"/assets/logo.png"}
          width={1000}
          height={1000}
          alt="logo"
          className="md:w-[100px] w-[50px]"
        />
        <div className="md:flex gap-4 items-center hidden">
          <SelectComponent
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
            ]}
            label="Features"
            name="mySelect"
          />

          <SelectComponent
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
            ]}
            label="Solutions"
            name="mySelect"
          />

          <SelectComponent
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
            ]}
            label="Resources"
            name="mySelect"
          />

          <Link href={"#"} className="text-[#3353F9] text-xs font-bold">
            Pricing
          </Link>
          <Link href={"#"} className="text-[#3353F9] text-xs font-bold">
            API
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="fill" size="sm">
            Get Started for free
          </Button>

          <IoIosMenu 
            className="text-[#3353F9] text-2xl cursor-pointer md:hidden" 
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[999999] ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <Image
              src={"/assets/logo.png"}
              width={100}
              height={100}
              alt="logo"
              className="w-[50px]"
            />
            <IoMdClose 
              className="text-2xl cursor-pointer text-[#3353F9]" 
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <SelectComponent
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
              ]}
              label="Features"
              name="mySelect"
              active={true}
            />

            <SelectComponent
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
              ]}
              label="Solutions"
              name="mySelect"
            />

            <SelectComponent
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
              ]}
              label="Resources"
              name="mySelect"
            />

            <Link href={"#"} className="text-[#3353F9] text-sm">
              Pricing
            </Link>
            <Link href={"#"} className="text-[#3353F9] text-sm">
              API
            </Link>

            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" size="sm" className="w-full">
                Login
              </Button>
              <Button variant="fill" size="sm" className="w-full">
                Get Started for free
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
