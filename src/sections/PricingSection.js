import React from "react"

// const Listino = [
//   {
//     category: "Trattamenti Corpo",
//     entries: [
//       { label: "Trattamento pelle di seta", price: 35 },
//       { label: "Trattamento pelle di seta con Thermalie", price: 55 },
//       { label: "Trattamento riducente no cell", price: 55 },
//       { label: "Trattamento tonic-up", price: 45 },
//       { label: "Massaggio relax total body (1 ora)", price: 60 },
//       { label: "Massaggio relax parziale (mezz'ora)", price: 30 },
//       { label: "Rituale spa con thermalie", price: 55 },
//       { label: "Thermalie bagno di vapore con sale marino", price: 40 },
//       { label: "Pressoterapia", price: 35 },
//       { label: "R.E.M. ultrasuoni", price: 45 },
//     ],
//   },
//   {
//     category: "Trattamenti Viso",
//     entries: [
//       { label: "Pulizia viso profonda", price: "38" },
//       { label: "Trattamento olos age", price: "56" },
//       { label: "Trattamento filler", price: "72" },
//       { label: "Trattamento acido glicolico", price: "55" },
//       { label: "Trattamento age energy", price: "56" },
//       { label: "Trattamento calming/couperose", price: "42" },
//       { label: "Trattamento purificante acne", price: "42" },
//     ],
//   },
//   {
//     category: "Depilazione",
//     entries: [
//       { label: "Depilazione gambe + inguine", price: "28" },
//       { label: "Depilazione parziale", price: "17,50" },
//       { label: "Depilazione parziale + inguine", price: "19,50" },
//       { label: "Depilazione braccia", price: "15,50" },
//       { label: "Depilazione inguine/ascelle/glutei", price: "7,50" },
//       { label: "Depilazione baffetti/sopracciaglia", price: "4" },
//       { label: "Depilazione petto/schiena", price: "21" },
//     ],
//   },
//   {
//     category: "Manicure",
//     entries: [
//       { label: "Manicure", price: "12,50" },
//       { label: "Pedicure estetico", price: "17,50" },
//       { label: "Pedicure curativo + estetico", price: "30" },
//       { label: "Smalto semipermanente", price: "20" },
//       { label: "Ricostruzione unghie in gel", price: "50" },
//       { label: "Refil", price: "40" },
//     ],
//   },
// ]

const PricingSections = ({ prices }) => (
  <>
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-4xl leading-none font-extrabold text-gray-900 sm:text-center">
            Listino Prezzi
          </h1>
          <p className="mt-5 text-xl leading-7 text-gray-500 sm:text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            assumenda quisquam aut repellendus quibusdam in et mollitia
            veritatis blanditiis laboriosam! Provident explicabo quis nihil
            natus ad. Optio laudantium animi natus!
          </p>
          {/* <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm leading-5 font-medium text-gray-700 whitespace-nowrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-8"
            >
              Listino 1
            </button>
            <button
              type="button"
              className="relative w-1/2 border border-transparent rounded-md py-2 text-sm leading-5 font-medium text-gray-700 whitespace-nowrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-8"
            >
              Listino 2
            </button>
          </div> */}
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {prices.map((entry, key) => (
            <div
              key={key}
              className="rounded-lg shadow-lg divide-y divide-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {entry.category}
                </h2>
                <div className="mt-8 flex space-x-3">
                  <p className="mt-4 text-sm leading-5 text-gray-500">
                    A partire da soli
                  </p>
                  <span className="text-4xl leading-10 font-extrabold text-gray-900">
                    {Math.min(...entry.entries.map(e => parseFloat(e.price)))}€
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-8 w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                >
                  Prenota ora
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs leading-4 font-medium text-gray-900 tracking-wide uppercase">
                  Listino completo
                </h3>
                <ul className="mt-6 space-y-4">
                  {entry.entries.map((entry, key) => (
                    <li key={key}>
                      <span className="flex space-x-3">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="text-sm leading-5 text-gray-500">
                          {entry.label}
                        </div>
                      </span>
                      <div className="ml-8 text-sm leading-5 font-extrabold text-gray-500">
                        {entry.price}€
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default PricingSections
