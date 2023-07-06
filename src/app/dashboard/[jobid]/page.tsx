import axios from "axios";
import JobForm from "./JobForm";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Job } from "../../types/types";
import { set } from "react-hook-form";
import { Delete } from "lucide-react";
import DeleteButton from "./DeleteButton";
import getJobById from "@/app/actions/getJobById";
import { MdArrowBack } from "react-icons/md";

interface IParams {
  jobid: string;
}

const JobPage = async ({ params }: { params: IParams }) => {
  const currentJob = await getJobById(params.jobid);

  if (!currentJob || !params.jobid) {
    return <div>Job not found</div>;
  }

  return (
    <div className="lg:w-4/5 p-4">
      <div className="h-auto w-full rounded-3xl flex flex-col bg-neutral p-7">
        <div>
          <div className="flex">
            <Link href="/dashboard" className="pr-5">
              <MdArrowBack className="h-full" size={30} />
            </Link>

            <h1 className="text-slate-100 font-black text-2xl lg:text-3xl">
              {currentJob.jobTitle} at {currentJob.companyName}
            </h1>
          </div>
          <JobForm currentJob={currentJob} />
        </div>
      </div>
    </div>
  );
};
export default JobPage;
