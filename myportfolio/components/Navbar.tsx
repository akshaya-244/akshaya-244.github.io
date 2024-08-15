"use client"
import { useState } from "react";
import { FileText, Github, House, Linkedin, LinkedinIcon, Mail, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white border-b border-white">
      <div className="flex py-6 justify-between items-center mx-16">
        <div className="ml-6">
          <Link href="/"><House /></Link>
        </div>
        <div className="hidden md:flex w-1/4 justify-between ">
          <div className="hover:text-green-500">
            <Link href="/about">About</Link>
          </div>
          <div className="hover:text-green-500">
            <Link href="/projects">Projects</Link>
          </div>
          <div className="hover:text-green-500">
            <Link href="/techstack">Tech Stack</Link>
          </div>
          <Link href="https://github.com/akshaya-244" className="hover:text-purple-600">
            <Github />
          </Link>
          <Link className="hover:text-blue-500" href="https://www.linkedin.com/in/24-akshaya-mohan/">
            <LinkedinIcon />
          </Link>
          <Link className="hover:text-green-500" href="https://drive.google.com/file/d/1z68TaOC7lz4ml897Ibt76gkJp6_7XeHR/view?usp=sharing">
            <FileText />
          </Link>
          
        </div>
        <div className="md:hidden mr-6">
          <button onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden min-w-full flex flex-col justify-evenly items-center bg-black text-white py-4">
         
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/projects" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/techstack" onClick={toggleMenu}>
            Tech Stack
          </Link>
          <div className="min-w-full mt-4 flex justify-evenly">
          <Link href="https://github.com/akshaya-244" onClick={toggleMenu}>
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/24-akshaya-mohan/" onClick={toggleMenu}>
            <LinkedinIcon />
          </Link>
          <Link href="" onClick={toggleMenu}>
            <Mail />
          </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
