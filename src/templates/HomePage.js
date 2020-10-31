import React from "react"
import FeaturesSection from "../sections/FeaturesSection"
import HeaderSection from "../sections/HeaderSection"
import PricingSection from "../sections/PricingSection"
import FooterSection from "../sections/FooterSection"
import ContactSection from "../sections/ContactSection"
import SocialSection from "../sections/SocialSection"

export const HomePageTemplate = ({
  title,
  subtitle,
  blurbs,
  featuredImage,
}) => (
  <div>
    <HeaderSection data={{ title, subtitle, featuredImage }} />
    <div className="container mx-auto">
      <FeaturesSection blurbs={blurbs} />
      <PricingSection />
      <SocialSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
)

const HomePage = ({ data: { page } }) => {
  const { title, subtitle, blurbs, featuredImage } = page.frontmatter

  return (
    <HomePageTemplate
      title={title}
      subtitle={subtitle}
      blurbs={blurbs}
      featuredImage={featuredImage}
    />
  )
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
          image
          title
          body
        }
      }
    }
  }
`
