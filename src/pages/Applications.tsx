import { useState } from "react";

type Job = {
  id: string;
  company: string;
  position: string;
  status: string;
};

export default function Applications() {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const deleteJob = (id: string) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);

    setJobs(updatedJobs);

    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };
const STATUS_OPTIONS = ["Applied", "Interview", "Offer", "Rejected"];
const updateStatus = (id: string, newStatus: string) => {
  const updatedJobs = jobs.map((job) =>
    job.id === id ? { ...job, status: newStatus } : job
  );

  setJobs(updatedJobs);

  localStorage.setItem("jobs", JSON.stringify(updatedJobs));
};
  return (
    
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Job Applications</h1>

      <div className="space-y-4">
        
        {jobs.length === 0 && <p>No jobs added yet.</p>}

        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{job.position}</p>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={job.status}
                onChange={(e) => updateStatus(job.id, e.target.value)}
                className="text-sm border rounded px-2 py-1"
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <button
                onClick={() => deleteJob(job.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
