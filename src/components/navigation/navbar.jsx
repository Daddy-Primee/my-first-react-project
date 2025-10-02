"use client";
import MaxWidthContainer from "../shared/max-width-container";
import { Nav_Link } from "../../constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#30232d] shadow-md">
      <MaxWidthContainer className="flex md:justify-between items-center text-[#FAE9D7]  py-10">
        <div className="flex items-center gap-6">
         <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <Link href={"/"}>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">JobHub</h1>
        </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-6 md:gap-8 lg:gap-8 text-lg font-extrabold ">
            {Nav_Link.map((link, index) => (
              <li key={link.href}>
                <Link href={`${link.href}`} className="hover:text-[#D55053]">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
       
          

        {isOpen && (
          <nav className="absolute top-20 left-0 w-full bg-[#30232d] z-50 md:hidden">
            <ul className="flex flex-col gap-6 p-6 text-lg font-extrabold">
              {Nav_Link.map((link, index) => (
                <li key={link.href}>
                  <Link href={`${link.href}`} className="hover:text-[#D55053]" onClick={() => setIsOpen(false)}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
            
        
      
        <div className="hidden md:block">
          <Link href={"/browse-jobs"}>
          <Button
          
            className={
              "py-6 bg-[#D55053] font-extrabold hover:bg-[#f1c095] text-[#FAE9D7]"
            }
          >
            Find Job
          </Button>
          </Link>
          
        </div>
      </MaxWidthContainer>
    </header>
  );
}
