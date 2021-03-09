import React from "react"
import { graphql } from 'gatsby';
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
	prices,
	social
}) => (
  <div>
    <HeaderSection data={{ title, subtitle, featuredImage, prices, social }} />
    <div className="container mx-auto">
      <FeaturesSection blurbs={blurbs} />
      <PricingSection prices={prices} />
      <SocialSection />
      <ContactSection />
      <FooterSection social={social} />
    </div>
  </div>
)

const HomePage = ({ data: { page } }) => {
  const {
    title,
    subtitle,
    blurbs,
    featuredImage,
    prices,
    footer,
  } = page.frontmatter

  return (
    <HomePageTemplate
      title={title}
      subtitle={subtitle}
      blurbs={blurbs}
      featuredImage={featuredImage}
      prices={prices}
      social={footer.social}
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
        prices {
          category
          entries {
            label
            price
          }
        }
        footer {
          social {
            facebook
            instagram
          }
        }
      }
    }
  }
`
