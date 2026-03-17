import type { Job } from "../types/job";

type Props = {
  job: Job;
};

export default function JobCard({ job }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="font-bold">{job.company}</h3>
      <p>{job.role}</p>
      <span className="text-sm text-gray-500">{job.status}</span>
    </div>
  );
}