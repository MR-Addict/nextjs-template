"use client";

import { signIn, signOut } from "next-auth/react";

function Button({ title, callback }: { title: string; callback: Function }) {
  return (
    <button
      type='button'
      onClick={() => callback()}
      className='py-1 px-2 md:px-4 rounded-sm border border-black bg-black text-white hover:bg-white hover:text-black'
    >
      {title}
    </button>
  );
}

export default function LoginLogoutButton({ isNeededLogin }: { isNeededLogin: boolean }) {
  if (isNeededLogin) {
    return <Button title='Login' callback={signIn} />;
  } else {
    return <Button title='Logout' callback={signOut} />;
  }
}
