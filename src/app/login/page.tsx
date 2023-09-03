"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";

enum AuthType {
  LOGIN = "login",
  REGISTER = "register",
}

export default function Login() {
  const [authType, setAuthType] = useState<AuthType>(AuthType.LOGIN);
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
      <div className="flex bg-blue-300 justify-center">
        <h3
          className={`active:bg-blue-800 hover:bg-blue-700 hover:text-white hover:cursor-pointer  m-2 p-2 rounded-md ${
            authType === AuthType.LOGIN ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setAuthType(AuthType.LOGIN)}
        >
          Login
        </h3>
        <h3
          className={`active:bg-blue-800 hover:bg-blue-700 hover:text-white hover:cursor-pointer  m-2 p-2 rounded-md ${
            authType === AuthType.REGISTER ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setAuthType(AuthType.REGISTER)}
        >
          Register
        </h3>
      </div>

      <form
        //   action={login}
        onSubmit={async (e) => {
          e.preventDefault();
          const email = e.target.elements.email.value;
          const password = e.target.elements.password.value;
          signIn("credentials", { email, password, authType });
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
          type="submit"
          value={authType === AuthType.LOGIN ? "Login" : "Register"}
          className="m-2 p-2  bg-green-400 active:bg-green-500 rounded-lg hover:cursor-pointer"
        />
      </form>
    </div>
  );
}
