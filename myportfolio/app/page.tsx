import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen grid grid-cols-1 md:grid-cols-2   bg-black text-white">
      <div className="flex justify-center items-center mb-44  animate-slide-in-left px-4 md:px-8">
          <Image
            src="/Akshaya.jpg"
            alt="Akshaya Mohan"
            width={400}
            height={400}
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start mb-44 font-sans px-4  animate-slide-in-left md:px-8">
          <div className="text-xl md:text-3xl">Hi there I'm </div>
         <div className="text-4xl md:text-6xl font-bold  text-green-600">Akshaya Mohan</div> 
          <div className="text-2xl md:text-3xl font-semibold mt-2 "> A passionate Software Developer with a knack for solving complex problems. I specialize in crafting highly asynchronous, intricate websites with seamless webhooks integration and training advanced neural networks with <span className=" text-red-600">ATTENTION </span>to detail.</div> 
        </div>
       
      </div>
    </div>
  );
}
