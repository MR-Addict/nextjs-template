import "./globals.css";

import { NextauthProvider } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='flex flex-col items-center justify-between'>
        <NextauthProvider>{children}</NextauthProvider>
      </body>
    </html>
  );
}
