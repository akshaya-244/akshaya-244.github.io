import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap- py-24 bg-black text-white">
      <div className="flex justify-center items-center px-4 md:px-8">
          <Image
            src="/Akshaya.jpg"
            alt="Akshaya Mohan"
            width={600}
            height={500}
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-start space-y- px-4 md:px-8">
          <div className="text-xl md:text-2xl">Hi there, I am</div>
          <div className="text-4xl md:text-6xl font-bold">Akshaya Mohan</div>
          <div className="text-2xl md:text-4xl font-bold">Tech Enthusiast | Full Stack Developer</div>
          <div className="text-xl md:text-3xl font-bold text-green-600 font-mono">
            Building the future, one app at a time
          </div>
        </div>
       
      </div>
    </div>
  );
}
