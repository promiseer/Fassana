import Head from "next/head";
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

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
      <Header />
      {children}
      <Footer />
    </div>
  );
}