import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { Job, JobStatus } from "@/types/job";
export default function Applications() {
  const { searchTerm } = useSearch();

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
  const updateStatus = (id: string, newStatus: JobStatus) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, status: newStatus } : job,
    );

    setJobs(updatedJobs);

    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || job.status === statusFilter;

    return matchesSearch && matchesStatus;
  });
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Job Applications</h1>
      <div className="flex gap-4 mb-6">
        <select
          className="border p-2 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="space-y-4">
        {jobs.length === 0 && <p>No jobs added yet.</p>}

        {filteredJobs.map((job) => (
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
                onChange={(e) =>
                  updateStatus(job.id, e.target.value as JobStatus)
                }
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
