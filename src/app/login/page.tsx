"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
  const { data: session, status } = useSession();
  console.log(status);
  if (status === "authenticated") {
    redirect("/");
  }
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex justify-center text-center flex-col">
      <h3>Login Page</h3>
      {}
      <form
        //   action={login}
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.elements.email.value;
          const password = e.target.elements.password.value;
          signIn("credentials", { email, password });
        }}
      >
        <input
          name="email"
          type="email"
          className="m-2 p-2 border-blue-400 border rounded-md"
        />
        <input
          name="password"
          type="password"
          className="m-2 p-2 border-blue-400 border rounded-md"
        />
        <input
          //   onSubmit={function (e) {
          //     e.preventDefault();
          //     const email = e.target.elements.email.value;
          //     const password = e.target.elements.password.value;
          //     console.log(`email: ${email}, password: ${password}`);

          //     // signIn("email", { email });
          //   }}
          type="submit"
          className="m-2 p-2 bg-blue-500 rounded-lg hover:cursor-pointer"
        />
      </form>
    </div>
  );
}
