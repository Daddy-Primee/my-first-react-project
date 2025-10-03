import { Jobs } from "@/constants/jobs";
import React from "react";


import Link from "next/link";


export default function Page({ params }) {
  const { slug } = params;
  const job = Jobs.find((job) => job.id.toString() === slug.split("-").pop());
  

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {job.title}
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          {job.company} • {job.location}
        </p>
      </div>
      <span className=" mt-4 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
        Senior
      </span>

      <div className="flex flex-wrap gap-2 text-sm mt-4 mb-6">
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          {job.salary}
        </span>
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          Role Overview
        </h2>
        <p>{job.role}</p>
      </div>

      <div className="prose dark:prose-dark max-w-none mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Job Description
        </h2>
        <p>{job.description}</p>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-2">
          Requirements
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="flex justify-end">
        <Link
          href="/apply">
          <button className=" mt-6 bg-[#D55053]   text-white font-medium py-4 px-8 rounded-lg hover:bg-[#f1c095] transition  ">

          Apply Now
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
