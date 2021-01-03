import React from "react"

const Nav = [
  { label: "Chi siamo", link: "#", type: "standard" },
  { label: "Cosa facciamo", link: "#", type: "standard" },
  { label: "Listino prezzi", link: "#", type: "standard" },
  { label: "Contattaci", link: "#", type: "accent" },
]

const HeaderSection = ({ data }) => (
  <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="hidden md:block md:ml-10 md:pr-4">
                {Nav.map(nav => (
                  <a
                    href={nav.link}
                    className={`${
                      nav.type === "accent"
                        ? `text-pink-600 hover:text-pink-900`
                        : `text-gray-500 hover:text-gray-900`
                    } mr-8 font-medium transition duration-150 ease-in-out`}
                  >
                    {nav.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {Nav.map((nav, index) => (
                    <a
                      href={nav.link}
                      className={`${index > 1 && "mt-1"} ${
                        nav.type === "accent"
                          ? `text-pink-600 bg-gray-50 hover:bg-gray-100 hover:text-pink-700 focus:bg-gray-100 focus:text-pink-700 `
                          : `text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:text-gray-900 focus:bg-gray-50 `
                      } focus:outline-none block px-3 py-2 rounded-md text-base font-medium  transition duration-150 ease-in-out`}
                      role="menuitem"
                    >
                      {nav.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                {data.title}
                <br />
              </h2>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-pink-600 sm:text-4xl sm:leading-none md:text-4xl">
                {data.subtitle}
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Sirio la stella del benessere e' un centro estetico sito in
                Cogliate specializzato in diverse tipologie di trattamenti
                estetici, personalizzati ed avanzati.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Scopri di più
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-pink-700 bg-pink-100 hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:shadow-outline-green focus:border-pink-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Contattaci
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={data.featuredImage}
          alt=""
        />
      </div>
    </div>
  </>
)

export default HeaderSection
