import React from "react"
import FeaturesSection from "../sections/FeaturesSection"
import HeaderSection from "../sections/HeaderSection"
import PricingSection from "../sections/PricingSection"
import FooterSection from "../sections/FooterSection"
import ContactSection from "../sections/ContactSection"
import SocialSection from "../sections/SocialSection"

const HomePageTemplate = ({
  title,
  subtitle,
  blurbs,
  featuredImage,
  prices,
  social,
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

export default HomePageTemplate
