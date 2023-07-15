import { User } from "@prisma/client";
import SignOutButton from "../components/SignOutButton";
import ThemeToggle from "../components/ThemeToggle";
import React from "react";

interface ProfileProps {
  user: User;
}

export default function profile({ user }: ProfileProps) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex bg-base-200 lg:rounded-3xl">
        {/* Navbar */}
        <div className="w-full navbar flex lg:flex-col ">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <h1 className="font-black text-4xl lg:py-8">
              <span className="text-primary">App</span>Track
            </h1>
          </div>
          <div className="flex-col hidden lg:block">
            <ul className="menu p-12">
              {/* Navbar menu content here */}
              <li>
                <div className="avatar placeholder pb-12 cursor-none">
                  <div className="bg-base-300 text-neutral-content rounded-full w-44 text-center">
                    <span className="text-base-content text-3xl">{user?.name}</span>
                  </div>
                </div>
              </li>
              <li>
                <SignOutButton />
              </li>

              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <div className="w-full flex justify-center p-12">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-44">
                  <span className="text-3xl">{user?.name}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <SignOutButton />
          </li>

          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}
