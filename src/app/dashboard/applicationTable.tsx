"use client";

import Link from "next/link";
import { Job } from "../types/types";

interface ApplicationTableProps {
  jobs: Job[];
}

const ApplicationTable: React.FC<ApplicationTableProps> = ({ jobs }) => {
  let content;
  if (jobs.length === 0) {
    content = (
      <div className="w-full flex flex-col text-center h-96 align-middle items-center justify-center">
        <h1 className="text-base-content font-black text-3xl pb-10">
          No Job Applications Found!
        </h1>
        <Link href="/dashboard/new">
          <button className="btn btn-primary btn-lg">Add Job App</button>
        </Link>
      </div>
    );
  } else {
    content = (
      <div className="relative overflow-x-auto shadow-md sm:rounded-3xl">
        <div className="flex w-full justify-between p-5">
          <h1 className="text-base-content font-black text-2xl lg:text-3xl">
            Applications:
          </h1>
          <Link href="/dashboard/new">
            <button className="btn btn-sm lg:btn-md btn-primary">
              Add New
            </button>
          </Link>
        </div>
        <table className="table bg-base-300 table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company Name</th>
              <th className="hidden md:table-cell">Applied Date</th>
              <th className="hidden md:table-cell">Application Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <th scope="row">{job.jobTitle}</th>
                <td>{job.companyName}</td>
                <td className="hidden md:table-cell">
                  {job.appliedAt}
                </td>
                <td className="hidden md:table-cell">{job.status}</td>
                <td>
                  <Link href="/dashboard/[id]" as={`/dashboard/${job.id}`}>
                    <button className="btn btn-ghost">more info</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="h-auto w-full rounded-3xl flex flex-col bg-base-200">
      {content}
    </div>
  );
};

export default ApplicationTable;
