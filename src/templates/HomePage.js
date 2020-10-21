import React from "react"
import Footer from "../components/Footer"

export const HomePageTemplate = ({ title, subtitle }) => (
  <>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <Footer />
  </>
)

const HomePage = ({ data: { page } }) => {
  const { title, subtitle } = page.frontmatter
  return <HomePageTemplate title={title} subtitle={subtitle} />
}

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
