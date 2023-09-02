"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Client() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return redirect("/api/auth/signin?callbackUrl=/client");
    },
  });
  const isLoading = status === "loading";
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      Client - protected by <code>useSession</code>
      <h3>Hello {session?.user?.email}</h3>
    </div>
  );
}
