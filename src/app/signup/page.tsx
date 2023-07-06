"use client";

import SocialLoginButton from "../components/SocialLoginButton";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";

import { signIn } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const socialAction = (action: string) => {
    setIsLoading(true);
    console.log('sign in with ' + action);

    signIn(action, { callbackUrl: '/dashboard'})
 
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-base-100">
      <div className="hero h-screen bg-neutral">
        <SocialLoginButton
          icon={FcGoogle}
          onClick={() => socialAction("google")}
          provider="Google"
        />

      </div>
    </main>
  );
}
