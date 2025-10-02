import JobCards from "@/components/shared/job-cards";
import React from "react";
import { Icon } from "lucide-react";
const Featured_Jobs = [
  {
    id: 1,
    title: "Software Engoineer",
    company: "Tech Corp",
    location: " Lagos, Nigaria",
    salary: "#200,000 - #500,000",
    description: "Develop and maintain web applications.",
    tags: ["Full-time", "Mid-level"],
  },

  {
    id: 2,
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "Abuja, Nigeria",
    salary: "#150,000 - #400,000",
    description: "Create user-friendly designs for mobile and web.",
    tags: ["Contract", "Senior"],
  },

  {
    id: 3,
    title: "Data Analyst",
    company: "Data Insights",
    location: "Port Harcourt, Nigeria",
    salary: "#180,000 - #450,000",
    description: "Analyze data to help make business decisions.",
    tags: ["Full-time", "Entry-level"],
  },

  {
    id: 4,
    title: "Project Manager",
    company: "Business Solutions",
    location: "Kano, Nigeria",
    salary: "#250,000 - #600,000",
    description: "Oversee project development from start to finish.",
    tags: ["Full-time", "Mid-level"],
  },

  {
    id: 5,
    title: "Marketing Specialist",
    company: "Market Pros",
    location: "Ibadan, Nigeria",
    salary: "#200,000 - #500,000",
    description: "Develop and implement marketing strategies.",
    tags: ["Part-time", "Mid-level"],
  },
  {
    id: 6,
    title: "Customer Support Representative",
    company: "Support Hub",
    location: "Enugu, Nigeria",
    salary: "#120,000 - #300,000",
    description: "Assist customers with inquiries and issues.",
    tags: ["Full-time", "Entry-level"],
  },
];

export default function FeaturedJobs() {
  return (
    <div className="py-16 px-4 ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#30232d]  text-center mt-25 ">
        Featured Jobs
      </h1>
      <p className="text-lg md:text-xl  text-gray-600 max-w-xl mx-auto mt-3  mb-12 text-center px-4">
        Discover handpicked opportunities from top companies looking for
        talented professionals like you.
      </p>

      <div className="conatiner mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-6">
          {Featured_Jobs.map((job) => (
            <JobCards key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
