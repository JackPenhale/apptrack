import Image from "next/image";
import Profile from "./profile";
import Stats from "./stats";
import ApplicationTable from "./applicationTable";
import { prisma } from "../libs/prismadb";

export default async function Page() {
  const jobs = await prisma.job.findMany();
  return (
    <div className=" w-full lg:w-4/5 p-4">
      {/* @ts-expect-error Server Component */}
      <ApplicationTable jobs={jobs} />
    </div>
  );
}
