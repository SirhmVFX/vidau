import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

function Testimonial({ name, role, company, content, image }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-w-[300px] md:min-w-full">
      <div className="flex flex-col items-start gap-4">
      
         <p className="text-gray-700 md:text-base text-xs">{content}</p>
        <div className="flex gap-2 ">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full object-cover md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
        />
          <div>
            <h4 className="font-medium text-[#3353F9] md:text-base text-sm">{name}</h4>
            <p className=" text-gray-500 md:text-base text-xs">{role} at {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
