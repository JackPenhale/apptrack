"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import SocialLoginButton from "../components/SocialLoginButton";
import { Signika_Negative } from "next/font/google";
import AuthForm from "../components/Authform";

export default function Page() {
  return (
    <div
      className="
      flex 
      min-h-full 
      flex-col 
      justify-center 
      py-12 
      sm:px-6 
      lg:px-8 
     
    "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md    ">
        <h1 className="text-5xl font-bold">
          <span className="text-primary">Appli</span>Track
        </h1>
        <h2
          className="
          mt-6 
          text-center 
          text-3xl 
          font-bold 
          tracking-tight 
          text-gray-900
        "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
