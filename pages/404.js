import Head from "next/head";
import Image from "next/image";
import BlankLayout from "../components/layout/blank";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center">
      <p>
        This page could not be found

      </p>
    </div>
  );
}


PageNotFound.PageLayout = BlankLayout;

