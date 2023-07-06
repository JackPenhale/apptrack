'use client'

import Image from "next/image";
import Link from "next/link";
import {signIn} from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import SocialLoginButton from "../components/SocialLoginButton";
import { Signika_Negative } from "next/font/google";

export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-base-100">
      <div className="hero h-screen bg-neutral">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="form-control">
              <label className="input-group pb-7 ">
                <span className="w-28">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </label>

              <label className="input-group pb-7">
                <span className="w-28">Password</span>
                <input
                  id="password"
                  required
                  type="password"
                  placeholder="password"
                  className="input input-bordered  "
                />
              </label>
            </div>
            <div className="flex flex-col w-full border-opacity-50">
              <button className="btn btn-primary">Log In</button>

              <div className="divider">OR</div>

              <SocialLoginButton
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
