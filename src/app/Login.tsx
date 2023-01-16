"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export default function Login({ session }: { session: Session | null }) {
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
    </>
  );
}
