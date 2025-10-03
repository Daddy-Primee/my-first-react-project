import MaxWidthContainer from "@/components/shared/max-width-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <MaxWidthContainer className="text-center md:text-left py-12 md:py-20  text-[#30232d]">
        <div className="md:flex md:justify-between md:items-center gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold mb-4 px-2 md:px-1 leading-tight">
              Find The Right Job, <span className="text-[#D55053]">Faster</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">
              Connect with trusted employers and start building your career
              today.
            </p>
            <Link href={"/browse-jobs"}>
            <Button className="bg-[#D55053] text-[#FAE9D7] py-6 rounded-md font-bold mx-auto md:mx-32 hover:bg-[#f1c095] transition">
              Get Started
            </Button>
            </Link>
            
         
            </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvptjgvmt/image/upload/v1757686837/NA_October_10_bkocws.jpg"
              alt="Hero Image"
              className="mx-auto mt-12 w-full max-w-7xl rounded-md shadow-lg"
            />
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
