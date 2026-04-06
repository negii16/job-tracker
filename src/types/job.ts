export type JobStatus = "Applied" | "Interview" | "Offer" | "Rejected";

export interface Job {
  id: string;
  company: string;
  position: string;
  status: JobStatus;
  appliedDate?: string;
  notes?: string;
}
