import "./globals.css";

import { NextauthProvider, ScrollToTop, PopupContextProvider, Footer, Navbar } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='dark:bg-gray-900 min-h-screen flex flex-col items-center justify-between'>
        <NextauthProvider>
          <PopupContextProvider>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
          </PopupContextProvider>
        </NextauthProvider>
      </body>
    </html>
  );
}
