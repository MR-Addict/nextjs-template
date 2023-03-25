import { getServerSession } from "next-auth/next";

import LoginLogoutButton from "./LoginLogoutButton";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function NavbarButtons() {
  const session = await getServerSession(authOptions);

  if (session) return <LoginLogoutButton isNeededLogin={false} />;
  else return <LoginLogoutButton isNeededLogin={true} />;
}
