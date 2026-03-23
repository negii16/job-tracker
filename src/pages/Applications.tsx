import { useState } from "react";

type Job = {
  company: string;
  position: string;
  status: string;
};

export default function Applications() {
  const [jobs] = useState<Job[]>(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Job Applications</h1>

      <div className="space-y-4">
        {jobs.length === 0 && <p>No jobs added yet.</p>}

        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex justify-between"
          >
            <div>
              <p className="font-medium">{job.position}</p>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>

            <span className="text-sm">{job.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
