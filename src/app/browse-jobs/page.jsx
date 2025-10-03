"use client";
import MaxWidthContainer from "@/components/shared/max-width-container";
import { useState } from "react";
import { Jobs } from "@/constants/jobs";
import JobCards from "@/components/shared/job-cards";


console.log(Jobs.length);




 const categories =["All", "Technology", "Human-Resources", "Health-Care", "Business", "Education", "Engineering"]

export default function BrowseJobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10; 
  const [selectedCategory, setSelectedCategory] = useState("All")


  const filteredJobs =
   selectedCategory === "All"
   ? Jobs
   : Jobs.filter((job) => job.categories === selectedCategory);
 

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Find start and end index
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  // Slice jobs for current page
  const currentJobs = filteredJobs.slice(startIndex, endIndex);
  
    return (
    <div>
      <main className="min-h-screen  text-[#30232d] py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center">
          Browse Jobs
        </h1>
        <p className="text-base sm:text-4xl md:text-xl lg:text-xl xl:text-2xl mb-4 max-w-3xl mx-auto text-center">
          Explore thousands of opportunities across different industries.
          Whether you are looking for tech, healthcare, business, or creative
          roles, find the right career path that matches your skills and
          passion.
        </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1); 
              }}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedCategory === cat
                  ? "bg-[#D55053] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-6 justify-center mt-10 px-8">
          {currentJobs.map((job) => (
            <JobCards job={job} key={job.id} />
          ))}
        </div>

          <div>
            
          </div>

        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>

        
          <div className="flex flex-wrap items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-[#D55053] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded text-[#FAE9D7] bg-[#D55053] hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
