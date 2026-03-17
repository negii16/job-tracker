import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";
import type { Job } from "../types/job";

export default function Applications() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <div className="grid gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}