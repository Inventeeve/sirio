import React from "react"
import Footer from "../components/Footer"
import FeaturesSection from "../sections/FeatruresSection"
import HeaderSection from "../sections/HeaderSection"
import FooterSection from "../sections/FooterSection"

export const HomePageTemplate = ({ title, subtitle, blurbs, featuredImage }) => (
  <div>
    <HeaderSection data={{ title, subtitle, featuredImage }} />
    <div className="container mx-auto">
      <FeaturesSection blurbs={blurbs} />
      <FooterSection />
    </div>
  </div>
)

const HomePage = ({ data: { page } }) => {
  const { title, subtitle, blurbs, featuredImage } = page.frontmatter
  return <HomePageTemplate title={title} subtitle={subtitle} blurbs={blurbs} featuredImage={featuredImage} />
}

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        featuredImage
        blurbs {
          title
          body
        }
      }
    }
  }
`
