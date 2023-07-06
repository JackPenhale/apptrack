import Image from "next/image";
import Profile from "../profile";
import Stats from "../stats";
import Link from "next/link";

import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { prisma } from "@/app/libs/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import getCurrentUser from "../../actions/getCurrentUser";
import { MdArrowBack } from "react-icons/md";
import JobForm from "./JobForm";

export default async function Page() {
  const applicationStatus = [
    "Applying",
    "Applied",
    "Interviewing",
    "Offer",
    "Rejected",
  ];
  return (
    <div className="lg:w-4/5 p-4">
      <div className="h-auto w-full rounded-3xl flex flex-col bg-neutral p-7">
        <div className="flex">
          <Link href="/dashboard" className="pr-5">
            <MdArrowBack className="h-full" size={30} />
          </Link>

          <h1 className="text-slate-100 font-black  text-2xl lg:text-3xl">
            Add an Application
          </h1>
        </div>
        <JobForm />
      </div>
    </div>
  );
}
