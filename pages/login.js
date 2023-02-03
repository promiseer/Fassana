import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Login() {
  return (
    <div className="text-center shadow-2xl ">
      <div>
        <Link
          href="/"
          className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
          aria-label="logo"
        >
          <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            className="w-6 h-auto text-indigo-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          Fassana
        </Link>
        <h1>Log into Fassana</h1>
        <button>Continue with Google</button>
        <hr></hr>
        Or
        <hr></hr>
        <h2>Email address</h2>
        <input></input>
        <button>Continue</button>
        <p>Don&apos;t have an account?Sign up </p>
        <p>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <p>
          Asana.com Support Integrations Forum Developers & API Resources Guide
          Templates Pricing Terms Privacy
        </p>
      </div>
    </div>
  );
}
