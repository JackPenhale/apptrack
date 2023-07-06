import { prisma } from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(request: Request) {
  console.log("GET request JOBS");
  const jobs = await prisma.job.findMany();
  return NextResponse.json(jobs);
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  console.log("+=++++++ " + user?.id);

  if (!user?.id) {
    return NextResponse.json(null);
  }
  const json = await request.json();
  const created = await prisma.job.create({
    data: {
      ...json, userId: user.id
    }


  });
  return NextResponse.json(created);
}

export async function PUT(request: Request) {
  const json = await request.json();
  const updated = await prisma.job.update({
    where: { id: json.id },
    data: json,
  });
  return NextResponse.json(updated);
}

export async function DELETE(request: Request) {
  const json = await request.json();
  const deleted = await prisma.job.delete({ where: { id: json.id } });
  return NextResponse.json(deleted);
}
