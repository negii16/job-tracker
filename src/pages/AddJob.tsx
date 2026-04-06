import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Job, JobStatus } from "@/types/job";

export default function AddJob() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState<JobStatus>("Applied");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newJob: Job = {
      id: crypto.randomUUID(),
      company,
      position,
      status,
    };
    const existingJobs = JSON.parse(localStorage.getItem("jobs") || "[]");

    const updatedJobs = [...existingJobs, newJob];

    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    setCompany("");
    setPosition("");
    setStatus("Applied");
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">Add Job Application</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <Input
          placeholder="Job Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <select
          className="w-full border rounded-md p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value as JobStatus)}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>s
        </select>

        <Button type="submit">Save Job</Button>
      </form>
    </div>
  );
}
