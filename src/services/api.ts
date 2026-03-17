import type { Job } from "../types/job";

let jobs: Job[] = [];

export const getJobs = () => {
  return Promise.resolve(jobs);
};

export const addJob = (job: Job) => {
  jobs.push(job);
  return Promise.resolve(job);
};

export const deleteJob = (id: string) => {
  jobs = jobs.filter((job) => job.id !== id);
  return Promise.resolve();
};