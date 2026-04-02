import { useState } from "react";

type Job = {
  id: string;
  company: string;
  position: string;
  status: string;
};

export default function Interviews() {
  const [jobs] = useState<Job[]>(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const interviewJobs = jobs.filter((job) => job.status === "Interview");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Interviews</h1>

      {interviewJobs.length === 0 && <p>No interviews scheduled yet.</p>}

      <div className="space-y-4">
        {interviewJobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4">
            <p className="font-medium">{job.position}</p>
            <p className="text-sm text-gray-500">{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
