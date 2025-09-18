import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import MaxWidthContainer from "@/components/shared/max-width-container";
import { Jobs } from "@/constants/jobs";
import JobCards from "@/components/shared/job-cards";

export default function BrowseJobs() {
  return (
    <div>
      <main className="min-h-screen  text-[#30232d] py-20">
        <h1 className="text-6xl font-extrabold mb-6 text-center">
          Browse Jobs
        </h1>
        <p className="text-lg mb-4 max-w-3xl mx-auto text-center">
          Explore a wide range of job opportunities from top companies
          worldwide. Use our advanced search filters to find the perfect job
          that matches your skills and career goals.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mt-10 px-5">
            {Jobs.map((job) => (
            <JobCards job={job} key={job.id} />
            ))}
        </div>
      </main>
    </div>
  );
}
