import Image from "next/image";
import SelectComponent from "./SelectComponent";
import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="fixed z-50 w-full bg-white flex justify-center items-center py-6 gap-[80px]">
        <Image
          src={"/assets/logo.png"}
          width={1000}
          height={1000}
          alt="logo"
          className="w-[100px]"
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
        </div>
      </div>
    </>
  );
}

export default Header;
