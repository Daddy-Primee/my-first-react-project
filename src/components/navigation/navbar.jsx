import MaxWidthContainer from "../shared/max-width-container";
import { Nav_Link } from "../../constants";
import Link from "next/link";
import { Button } from "../ui/button";


export default function Navbar() {
    return (
    <header className="bg-[#30232d] shadow-md">
     <MaxWidthContainer className="flex md:justify-between items-center text-[#FAE9D7]  py-8">
        <Link href={"/"}> 
            <h1 className="text-6xl font-bold">JobHub</h1>
        </Link>
          <nav>
            <ul className="flex md:gap-8 text-lg font-extrabold ">
                {Nav_Link.map((link, index) => (
                  <li key={link.href}>
                     <Link href={`/${link.href}`} className="hover:text-[#D55053]">
                      {link.title}
                    </Link>
                  </li>
             ))}
           </ul>

          </nav>
         <Button className={ "h-16 w-24 bg-[#D55053] font-extrabold hover:bg-[#f1c095] text-[#FAE9D7]"}>Find Job</Button>
    </MaxWidthContainer>
        </header>
        )
        
}