"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

import { usePopupContext } from "../components";

export default function Login({ session }: { session: Session | null }) {
  const { popup } = usePopupContext();

  return (
    <>
      {session ? (
        <div className='flex flex-row gap-2 w-fit'>
          <button onClick={() => signOut()} className='py-1 px-2 rounded-md bg-black text-white'>
            Logout
          </button>
          {/* @ts-expect-error */}
          <h1 className='text-2xl text-slate-800 font-semibold'>Hello, {session.user.username}</h1>
        </div>
      ) : (
        <button onClick={() => signIn()} className='py-1 px-2 rounded-md bg-black text-white'>
          Login
        </button>
      )}
      <button
        onClick={() => popup({ status: false, message: "Login success" })}
        className='bg-black text-white rounded-md py-1 px-2'
      >
        Popup
      </button>
    </>
  );
}
