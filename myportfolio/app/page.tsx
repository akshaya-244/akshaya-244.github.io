import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex  justify-around py-24 bg-black mx-auto text-white">
        <div className="mt-4">
        
          <div className="mt-4 ">Hi there, I am </div>
          <div className="mt-4 text-6xl font-bold">Akshaya Mohan</div>
          <div className="mt-8 text-4xl font-bold">Tech Enthusiast | Full Stack Developer </div>
          <div className="mt-8 text-4xl font-bold text-green-600 font-mono">Building the future, one app at a time</div>
          
          <div>
            
          </div>
        </div>
        <div>
          <Image src="/Akshaya.jpg" alt="Hello" width={600} height={500} />

        </div>

      </div>
    </div>
  );
}
