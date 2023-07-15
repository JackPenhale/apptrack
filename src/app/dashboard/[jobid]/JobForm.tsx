"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Job } from "../../types/types";
import { BiLinkExternal } from "react-icons/bi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

interface FormProps {
  currentJob: Job;
}

export default function JobForm(currentJob: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Job>();
  const onSubmit: SubmitHandler<Job> = (data) => {
    console.log("WE ARE SUMBITTING" + data);
    axios
      .post(`/api/jobs/${currentJob.currentJob.id}`, data)
      .then((res) => {
        console.log(res.data);
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const appStatusOptions = [
    "Applying",
    "Applied",
    "Interviewing",
    "Accepted",
    "Rejected",
  ];

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="lg:pt-12 w-full flex justify-center items-center flex-col"
    >
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col lg:flex-row lg:w-3/4 justify-between ">
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              className="input input-bordered  w-full max-w-xs"
              type="text"
              defaultValue={currentJob.currentJob.jobTitle}
              {...register("jobTitle", { required: true })}
            />
          </div>
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              defaultValue={currentJob.currentJob.companyName}
              {...register("companyName", { required: true })}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="flex lg:flex-row flex-col lg:w-3/4 justify-between ">
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="date"
              defaultValue={currentJob.currentJob.appliedAt}
              {...register("appliedAt", { required: true })}
            />
          </div>
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text">Application Status</span>
            </label>
            <select
              {...register("status")}
              className="select w-full max-w-xs select-bordered"
            >
              {appStatusOptions.map((status) =>
                currentJob.currentJob.status === status ? (
                  <option key={status} value={status} selected>
                    {status}
                  </option>
                ) : (
                  <option key={status} value={status}>
                    {status}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center lg:pt-5">
        <div className="flex lg:flex-row flex-col lg:w-3/4 justify-between ">
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text">Link to Job</span>
            </label>
            <div className="flex">
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                defaultValue={currentJob.currentJob.linkToJob}
                {...register("linkToJob", { required: true })}
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <label className="label">
              <span className="label-text">Application Notes</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              defaultValue={currentJob.currentJob.note}
              {...register("note", { required: false })}
            />
          </div>
        </div>
      </div>
      <div className="flex w-3/4 justify-start items-center py-12">
        <button type="submit" className="btn btn-primary w-20 mr-5 ">
          Submit
        </button>
        <Link href={`/dashboard/`}>
          <DeleteButton jobid={currentJob.currentJob.id} />
        </Link>
      </div>
    </form>
  );
}
