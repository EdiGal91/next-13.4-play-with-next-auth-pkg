"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Logout() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h3>Account Page</h3>
      <button
        onClick={() => {
          signOut();
          redirect("/login");
        }}
        className="m-2 p-2 bg-red-500 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
