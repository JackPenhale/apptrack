import { prisma } from "../libs/prismadb";

interface IParams {
  jobid: string;
}

export default async function getJobById(jobId: string) {
  try {
    if (!jobId) {
      return null;
    }

    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
      },
      include: {
        user: true,
      },
    });

    if (!job) {
      return null;
    }

    return {
      ...job,
      note: job.note || "",

    };
  } catch (error: any) {
    throw new Error(error);
  }
}
