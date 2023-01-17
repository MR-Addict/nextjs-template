import "./globals.css";

import { NextauthProvider, ScrollToTop, PopupContextProvider, Footer } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='flex flex-col items-center justify-between'>
        <NextauthProvider>
          <PopupContextProvider>
            {children}
            <Footer />
            <ScrollToTop />
          </PopupContextProvider>
        </NextauthProvider>
      </body>
    </html>
  );
}
