'use client';
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
