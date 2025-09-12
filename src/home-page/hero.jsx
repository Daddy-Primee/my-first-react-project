import MaxWidthContainer from "@/components/shared/max-width-container";


export default function Hero() {
  return (
    <section>
    <MaxWidthContainer className="text-center py-20 text-[#30232d]">
        <div className="md:flex md:justify-between md:items-center gap-8">
             <div>
        <h1 className="text-7xl font-extrabold mb-4">Find the right job, faster</h1>
        <p className="text-3xl mb-8">Connect with trusted employers and start building your career today.</p>
        <button className="bg-[#D55053] text-[#FAE9D7] px-6 py-3 rounded-md font-bold hover:bg-[#f1c095] transition">
            Get Started
        </button>
        </div>
        <div>
        <img src="https://res.cloudinary.com/dvptjgvmt/image/upload/v1757686837/NA_October_10_bkocws.jpg" alt="Hero Image" className="mx-auto mt-12 w-full max-w-4xl rounded-md shadow-lg"/>

        </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
             <input type="text" placeholder="Job Category" className="bg-[#D55053] px-3 py-4 " />
             <input type="text" placeholder="Keyword / Job Title" className="text-[#FAE9D7]  bg-[#D55053] px-3 py-4" />
              <button className="text-[#FAE9D7] bg-[#D55053] px-6 py-3 rounded-md font-bold hover:bg-[#f1c095] ">
                Search
               </button>
        </div>
       
    </MaxWidthContainer>
    </section>
  )

}

