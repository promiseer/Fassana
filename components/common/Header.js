export default function Header() {
  return (
    <div className="bg-white lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header className="flex justify-between items-center py-4 md:py-8">
          <a
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
          </a>

          <nav className="hidden lg:flex gap-12">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Why Fassana ?
              
            </a>
            <a
              href="#"
              className="inline-flex items-center text-indigo-500 text-lg font-semibold gap-1"
            >
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="/pricing"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Pricing
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              About
            </a>
          </nav>

          <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <a
              href="login"
              className="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
            >
              Sign in
            </a>

            <a
              href="create-account"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get Started
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>
        </header>
        <div className="w-full hidden lg:block bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
          <div className="max-w-screen-lg flex items-center gap-8 p-8 mx-auto">
            <div className="w-2/3 grid grid-cols-2 gap-8">
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">Growth</div>
                  <p className="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>

              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">Security</div>
                  <p className="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">Cloud</div>
                  <p className="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">Analytics</div>
                  <p className="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>
            </div>

            <div className="w-1/3 border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320"
                  loading="lazy"
                  alt="Photo by Fakurian Design"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex justify-between items-center bg-white gap-2 p-3">
                <p className="text-gray-500 text-sm">
                  This is some simple filler text.
                </p>

                <a
                  href="#"
                  className="inline-block shrink-0 bg-white hover:bg-gray-50 active:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 text-sm font-semibold border rounded-lg outline-none transition duration-100 px-3 py-1"
                >
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
