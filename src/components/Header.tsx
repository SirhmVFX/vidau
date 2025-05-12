import Image from "next/image";
import SelectComponent from "./SelectComponent";
import Link from "next/link";
import Button from "./Button";
import { IoIosMenu } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="fixed z-50 w-full bg-white flex md:justify-center justify-between items-center md:py-6 p-4 md:gap-[80px] gap-2">
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

          <Link href={"#"} className="text-[#3353F9] text-xs">
            Pricing
          </Link>
          <Link href={"#"} className="text-[#3353F9] text-xs">
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

          <IoIosMenu className="text-[#3353F9] text-lg cursor-pointer md:hidden "  />
        </div>
      </div>
    </>
  );
}

export default Header;
