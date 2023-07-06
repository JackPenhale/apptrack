'use client'

import Image from "next/image";
import Link from "next/link";
import SocialLoginButton from "./components/SocialLoginButton";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function Home() {
  const socialAction = (action: string) => {
    console.log("sign in with " + action);

    signIn(action, { callbackUrl: "/dashboard" });
  };

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-base-100">
      <div className="hero h-screen bg-neutral">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-primary">Appli</span>Track
            </h1>
            <p className="py-6">Keep your job applications sorted</p>
            <div className="flex flex-col">
              <SocialLoginButton
                icon={FcGoogle}
                onClick={() => socialAction("google")}
                provider="Google"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


