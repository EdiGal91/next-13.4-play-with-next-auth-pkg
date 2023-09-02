import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Admin() {
  const session = await getServerSession(options);
  if (!session) {
    return redirect("/api/auth/signin?callbackUrl=/admin");
  }
  return (
    <div>
      Admin - protected by <code>getServerSession</code>
      <h3>Hello {session?.user?.email}</h3>
    </div>
  );
}
