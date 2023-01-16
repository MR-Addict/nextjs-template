import { unstable_getServerSession } from "next-auth/next";

import Login from "./Login";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  return (
    <div className='frame w-full flex flex-col items-center'>
      <Login session={session} />
    </div>
  );
}
