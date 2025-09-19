import MaxWidthContainer from "@/components/shared/max-width-container";
import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <section>
    <MaxWidthContainer className="text-center py-20 text-[#30232d]">
        <div className="md:flex md:justify-between md:items-center gap-8">
             <div>
        <h1 className="text-7xl font-extrabold mb-4">Find the right job, faster</h1>
        <p className="text-3xl mb-8">Connect with trusted employers and start building your career today.</p>
        <Button className="bg-[#D55053] text-[#FAE9D7] py-6 rounded-md font-bold hover:bg-[#f1c095] transition">
            Browse Jobs
        </Button>
        </div>
        <div>
        <img src="https://res.cloudinary.com/dvptjgvmt/image/upload/v1757686837/NA_October_10_bkocws.jpg" alt="Hero Image" className="mx-auto mt-12 w-full max-w-7xl rounded-md shadow-lg"/>

        </div>
        </div>
       
       
    </MaxWidthContainer>
    </section>
  )

}

