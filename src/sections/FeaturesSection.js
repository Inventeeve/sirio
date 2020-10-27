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
            Trattamenti SPA, trattamenti viso antirughe, filler, acido
            glicolico, trattamenti corpo modellanti anticellulite con bagni di
            vapore, pedicure curativo, ricostruzione unghie, smalto
            semipermanente, depilazione, trucco e molto altro.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {/* Blurbs */}
            {blurbs.map(blurb => (
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <li className="mt-10 md:mt-0 w-full">
                    <div className="h-64 max-w-sm w-full lg:max-w-full lg:flex">
                      <div
                        className="h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{
                          backgroundImage: `url(${blurb.image})`,
                        }}
                        title="Woman holding a mug"
                      ></div>
                      <div className="w-full border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                          <div className="text-gray-900 font-bold text-xl mb-2">
                            {blurb.title}
                          </div>
                          <p className="text-gray-700 text-base">
                            {blurb.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
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
