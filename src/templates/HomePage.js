import React from "react"
import Footer from "../components/Footer"
import FeaturesSection from "../sections/FeatruresSection"
import HeaderSection from "../sections/HeaderSection"
import FooterSection from "../sections/FooterSection"

export const HomePageTemplate = ({ title, subtitle, blurbs }) => (
  <div>
    <HeaderSection data={{ title, subtitle }} />
    <div className="container mx-auto">
      <FeaturesSection blurbs={blurbs} />
      <FooterSection />
    </div>
  </div>
)

const HomePage = ({ data: { page } }) => {
  const { title, subtitle, blurbs } = page.frontmatter
  return <HomePageTemplate title={title} subtitle={subtitle} blurbs={blurbs} />
}

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        blurbs {
          title
          body
        }
      }
    }
  }
`
