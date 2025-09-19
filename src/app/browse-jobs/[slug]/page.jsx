import { Jobs } from "@/constants/jobs";

export default function page({ params }) {
  const { slug } = params;
  const job = Jobs.find((job) => job.id.toString() === slug.split("-").pop());

  return (
    <div>
      <div className="p-8 border border-gray-300 rounded-lg shadow-md max-w-4xl mx-5 my-10">
        <h2 className="font-bold text-3xl mb-2">{job.title}</h2>
        <p className=" text-2xl mb-2">{job.company}</p>
        <p className="text-2xl mb-2">{job.location}</p>
        <p>{job.salary}</p>
        <p>{job.description}</p>
        <p>{job.tags}</p>
        <h3 className="font-semibold text-2xl mt-4 mb-2">Role Overview</h3>
       <p>{ job.role} </p>
        <h3 className="font-semibold text-2xl mt-4 mb-2">Requirements</h3>
        <p>{job.requirements}</p>
      </div>
    </div>
  );
}
