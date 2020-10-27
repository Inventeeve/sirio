import React from "react"

const FeaturesSection = ({ blurbs }) => (
  <>
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-pink-600 font-semibold tracking-wide uppercase">
            sunt nulla eos quia ex.
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
						Lorem ipsum dolor sit amet consectetur
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
					Trattamenti SPA, trattamenti viso antirughe, filler, acido glicolico, trattamenti corpo modellanti anticellulite con bagni di vapore, pedicure curativo, ricostruzione unghie, smalto semipermanente, depilazione, trucco e molto altro.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Blurbs */}
            {blurbs.map(blurb => (
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      {blurb.title}
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      {blurb.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default FeaturesSection
