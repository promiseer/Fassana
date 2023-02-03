import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-white lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">Hero Body</div>
      </div>
      <Footer />
    </>
  );
}
