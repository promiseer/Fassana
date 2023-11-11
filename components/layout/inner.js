import Head from "next/head";
import React from "react";
import Sidebar from "../common/Sidebar";


export default function Default({ children }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="#"
        />
        <title>Fassana</title>
      </Head>
      {/* <Sidebar/> */}
      <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16"> 
                <div className="flex-grow">
                    <main className="my-0 py-2">{children}</main>
                </div>
            </div>
      </div>
  );
}