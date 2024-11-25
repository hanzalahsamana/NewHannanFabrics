"use client";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/layout/layout";
import Script from "next/script";

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

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5MLLMDZ7');
            `,
          }}
        />
        <title>Hannan Fabrics</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5MLLMDZ7"
              height="0"
              width="0"
              // style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          <Layout chidren={children} />
          <ToastContainer />
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
