import { Briefcase, Send, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSearch } from "@/hooks/useSearch";
import { Job } from "@/types/job";
import { useState } from "react";

export default function Dashboard() {
  const { searchTerm } = useSearch();
  const savedJobs = JSON.parse(localStorage.getItem("jobs") || "[]");
  const filteredJobs = savedJobs.filter(
    (job: Job) =>
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const recentJobs = filteredJobs.slice(0, 3);
  const [jobs] = useState<Job[]>(() => {
    return JSON.parse(localStorage.getItem("jobs") || "[]");
  });
  const totalJobs = jobs.length;

  const appliedJobs = jobs.filter((job) => job.status === "Applied").length;

  const interviewJobs = jobs.filter((job) => job.status === "Interview").length;

  const offerJobs = jobs.filter((job) => job.status === "Offer").length;

  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <Link to="/add-job">
          <Button>Add Job</Button>
        </Link>
      </div>

      {/* Stats Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Total Jobs</CardTitle>
            <Briefcase size={24} />
          </CardHeader>

          <CardContent>
            <p className="text-2xl font-bold">{totalJobs}</p>
          </CardContent>
        </Card>

        <Link to="/applications">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Applications</CardTitle>
              <Send size={20} />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{appliedJobs}</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/interviews">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Interviews</CardTitle>
              <Calendar size={20} />
            </CardHeader>

            <CardContent>
              <p className="text-2xl font-bold">{interviewJobs}</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/offers">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Offers</CardTitle>
              <CheckCircle size={20} />
            </CardHeader>

            <CardContent>
              <p className="text-2xl font-bold">{offerJobs}</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Applications */}

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {recentJobs.map((job: Job) => (
              <div key={job.id} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{job.position}</p>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>

                <span className="text-sm text-blue-500">{job.status}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
