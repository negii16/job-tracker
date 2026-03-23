import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Job = {
  company: string;
  position: string;
  status: string;
};

export default function AddJob() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newJob: Job = {
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
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <Button type="submit">Save Job</Button>
      </form>
    </div>
  );
}
