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
  description,
  focusMessage,
  blurbs,
  featuredImage,
  prices,
  social,
  contacts,
  instagram,
}) => {
  return (
    <div>
      <HeaderSection
        data={{ title, subtitle, description, featuredImage, prices, social }}
      />
      <div className="container mx-auto">
        <FeaturesSection focusMessage={focusMessage} blurbs={blurbs} />
        <PricingSection prices={prices} />
        <SocialSection posts={instagram} />
        <ContactSection contacts={contacts} />
        <FooterSection social={social} />
      </div>
    </div>
  )
}

export default HomePageTemplate
