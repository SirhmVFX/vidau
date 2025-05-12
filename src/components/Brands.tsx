import Image from "next/image"

function Brands() {
    const brands = [
        {id:1, brand: "/assets/b1.png"},
        {id:2, brand: "/assets/b2.png"},
        {id:3, brand: "/assets/b3.png"},
        {id:4, brand: "/assets/b4.png"},
        {id:5, brand: "/assets/b5.png"},
        {id:6, brand: "/assets/b6.png"},
        {id:7, brand: "/assets/b7.png"},
        {id:8, brand: "/assets/b8.png"},
        {id:9, brand: "/assets/b9.png"},
        {id:10, brand: "/assets/b10.png"},
        {id:11, brand: "/assets/b11png"},
        {id:12, brand: "/assets/b12.png"},
        {id:13, brand: "/assets/b13.png"},
        {id:14, brand: "/assets/b14.png"},
        {id:15, brand: "/assets/b15.png"},
        {id:16, brand: "/assets/b16.png"},
        {id:17, brand: "/assets/b17.png"},
        {id:18, brand: "/assets/b18.png"},
        {id:19, brand: "/assets/b19.png"},
        {id:20, brand: "/assets/b20.png"},
        {id:21, brand: "/assets/b21.png"},
        {id:22, brand: "/assets/b22.png"},
        {id:23, brand: "/assets/b23.png"},
        {id:24, brand: "/assets/b24.png"},
        {id:25, brand: "/assets/b25.png"},
        {id:26, brand: "/assets/b26.png"},
        {id:27, brand: "/assets/b27.png"},
        {id:28, brand: "/assets/b28.png"},
        {id:29, brand: "/assets/b29.png"},
        {id:30, brand: "/assets/b30.png"},
    ]
    return (
        <>
        <div className="flex flex-col gap-7 bg-[#fcfcfc] items-center py-[100px]">
            <h1>Trusted by <span>10,000+</span>Brands and advertisers</h1>
            <div className="flex items-center gap-4 h-10">
                {brands.slice(0,17).map((br) => (
                    <Image key={br.id} src={br.brand} width={1000} height={1000} alt="brand" className="h-6 w-fit" />
                ))}
            </div>
            <div className="flex items-center gap-4 h-10">
                {brands.slice(17,30).map((br) => (
                    <Image key={br.id} src={br.brand} width={1000} height={1000} alt="brand" className="h-10 w-fit" />
                ))}
            </div>
        </div>
        </>
    )
}

export default Brands