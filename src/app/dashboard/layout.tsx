import React from "react";
import Profile from "./profile";
import Stats from "./stats";
import getCurrentUser from "../actions/getCurrentUser";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex w-100vw lg:w-1/5 h-full p-4">
        {user && <Profile user={user} />}
      </div>
      {children}
    </div>
  );
}
