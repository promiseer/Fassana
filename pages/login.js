import { useState } from "react";
import BlankLayout from "../components/layout/blank";

const Login = () => {
  const [email, setEmail] = useState("test@gmail.com")
  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
  }
  return (
    <>

      <section class="text-gray-600 body-font">

        <div class="container px-5 py-24 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

            <h1 class="text-gray-900 font-medium title-font tracking-wider text-sm">Welcome to Fassana
            </h1>

            <p class="text-gray-500">To get started, please sign in
            </p>
            <button class="w-full mx-auto mt-16 mr-16  bg-red-200   text-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">Continue with Google</button>

            <h3>Or</h3>
            <div class="relative mb-4">
              <div>
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button class="w-full mx-auto mt-16 mr-16  bg-indigo-400   text-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg" onClick={handleLogin}>Continue</button>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

Login.PageLayout = BlankLayout
export default Login;