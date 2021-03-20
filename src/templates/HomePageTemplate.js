import React from "react"
import FeaturesSection from "../sections/FeaturesSection"
import HeaderSection from "../sections/HeaderSection"
import PricingSection from "../sections/PricingSection"
import FooterSection from "../sections/FooterSection"
import ContactSection from "../sections/ContactSection"
// import SocialSection from "../sections/SocialSection"

const HomePageTemplate = ({
  title,
  subtitle,
	description,
  blurbs,
  featuredImage,
  prices,
  social,
  // instagram,
}) => {
  return (
    <div>
      <HeaderSection
        data={{ title, subtitle, description, featuredImage, prices, social }}
      />
      <div className="container mx-auto">
        <FeaturesSection blurbs={blurbs} />
        <PricingSection prices={prices} />
        {/* <SocialSection posts={instagram} /> */}
        <ContactSection />
        <FooterSection social={social} />
      </div>
    </div>
  )
}

export default HomePageTemplate
