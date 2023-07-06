"use client";

import axios from "axios";
import { Link } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";

interface JobProps {
  jobid: string;
}

const deleteJob = async (id: string) => {
  axios
    .delete(`/api/jobs/${id}`)
    .then((res) => {
      console.log(res.data);
      window.location.href = "/dashboard"
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleDelete = async (id: string) => {
  await deleteJob(id);
};

export default async function DeleteButton(props: JobProps) {
  return (
    <div>
      <a href="/dashboard">
      <button className="btn w-20 " onClick={() => {handleDelete(props.jobid)}}>
        Delete
      </button>
      </a>
    </div>
  );
}
