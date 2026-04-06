import { Job } from "@/types/job";

export default function Offers() {
  const savedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");

  const offerJobs = savedJobs.filter((job: Job) => job.status === "Offer");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Offers</h1>

      {offerJobs.length === 0 ? (
        <p className="text-gray-500">No offers yet</p>
      ) : (
        offerJobs.map((job: Job) => (
          <div key={job.id} className="border-b py-3">
            <p className="font-medium">{job.position}</p>
            <p className="text-sm text-gray-500">{job.company}</p>
          </div>
        ))
      )}
    </div>
  );
}
