import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prismadb";

interface IParams {
  jobid?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {
    const { jobid } = params;
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return NextResponse.json(null);
    }

    const existingJob = await prisma.job.findUnique({
      where: {
        id: jobid,
      },
    });

    if (!existingJob) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const deletedJob = await prisma.job.deleteMany({
      where: {
        id: jobid,
      },
    });
    return NextResponse.json(deletedJob);
  } catch (error) {
    return NextResponse.json(null);
  }
}

export async function GET(
    request: Request,
    { params }: { params: IParams }
  ) {
    try {
      const { jobid } = params;
      const currentUser = await getCurrentUser();
  
      if (!currentUser?.id) {
        return NextResponse.json(null);
      }
  
      const existingJob = await prisma.job.findUnique({
        where: {
          id: jobid,
        },
      });
  
      if (!existingJob) {
        return new NextResponse("Invalid ID", { status: 400 });
      }
      return NextResponse.json(existingJob);
    } catch (error) {
      return NextResponse.json(null);
    }
  }

  export async function POST(
    request: Request,
    { params }: { params: IParams }
  ) {
    try {
      const json = await request.json();
      const {
        jobTitle,
      } = json;
      const { jobid } = params;
      const currentUser = await getCurrentUser();
  
      if (!currentUser?.id) {
        return NextResponse.json(null);
      }

      const updatedJob = await prisma.job.update({
        where: {
          id: jobid,
        },
        data: json,
      });
  
      if (!updatedJob) {
        return new NextResponse("FAILED TO UPDATE", { status: 400 });
      }
      return NextResponse.json(updatedJob);
    } catch (error) {
      return NextResponse.json(null);
    }
  }