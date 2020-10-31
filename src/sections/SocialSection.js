import { StaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const SocialSection = () => {
  return (
    <StaticQuery
      query={graphql`
        query SocialsQuery {
          allInstaNode(limit: 3) {
            edges {
              node {
                id
                likes
                comments
                mediaType
                preview
                original
                timestamp
                caption
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 220) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {/* <pre>{JSON.stringify(data.allInstaNode.edges, 0, 2)}</pre> */}
          <div className="relative pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                  Dai nostri social
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                  libero labore natus atque, ducimus sed.
                </p>
              </div>
              <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                {data.allInstaNode.edges.map(({ node }) => {
									const { timestamp, localFile, caption } = node;
									const _date = new Date(timestamp)
									const date = new Intl.DateTimeFormat('it-IT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(timestamp * 1000);

                  return (
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-shrink-0">
                        <Img
                          className="h-64 w-full object-cover"
                          fluid={localFile.childImageSharp.fluid}
                        />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm leading-5 font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                              instagram
                            </a>
                          </p>
                          <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                              {caption}
                            </h3>
                          </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            {/* <a href="#">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </a> */}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm leading-5 font-medium text-gray-900">
                              <a href="#" className="hover:underline">
                                sirio.stelladelbenessere
                              </a>
                            </p>
                            <div className="flex text-sm leading-5 text-gray-500">
                              <time>{date}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    />
  )
}

export default SocialSection
