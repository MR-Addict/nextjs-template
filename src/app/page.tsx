import { unstable_getServerSession } from "next-auth/next";

import { Tooltip } from "../components";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function Page() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) return <h1>Please Login!</h1>;

  const user = session.user as any;
  return (
    <Tooltip title={user.email} position='top'>
      <h1 className='cursor-pointer dark:text-white'>Hello, {user.username}.</h1>
    </Tooltip>
  );
}
