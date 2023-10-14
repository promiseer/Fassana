import Head from "next/head";
import React from "react";
export default function Blank({ children }) {
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

            <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16"> 
                <div className="flex-grow">
                    <main className="my-0 py-16">{children}</main>

                </div>
            </div>
        </div>
    );
}