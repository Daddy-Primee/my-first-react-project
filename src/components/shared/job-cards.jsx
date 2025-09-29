import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";


export default function JobCards({ job }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
      <h2 className="text-xl font-bold mb-2 text-[#30232d]">{job.title}</h2>
      <p className="text-gray-600 mb-1">
        {job.company} - {job.location}
      </p>
      <p className="text-gray-600 mb-1">{job.salary}</p>
      <p className="text-gray-700 mb-4">{job.description}</p>
      <div className="mb-4">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-[#f0f0f0] text-[#30232d] px-3 py-1 rounded-full text-sm mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          href={`/browse-jobs/${job.title
            .toLowerCase()
            .replace(/[\s/]+/g, "-")}-${job.company
            .toLowerCase()
            .replace(/\s+/g, "-")}-${job.id}`}
        >
          <Button className="text-[#FAE9D7] px-5 py-3 rounded-md font-bold bg-[#D55053] transition hover:bg-[#f1c095]">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
