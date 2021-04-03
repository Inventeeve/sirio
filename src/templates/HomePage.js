import React from "react"
import { graphql } from "gatsby"
import HomePageTemplate from "./HomePageTemplate"

const HomePage = ({ data: { page, instagram } }) => {
  const {
    title,
    subtitle,
    description,
    focusmessage,
    blurbs,
    featuredImage,
    prices,
    contacts,
    footer,
  } = page.frontmatter

  return (
    <HomePageTemplate
      title={title}
      subtitle={subtitle}
      description={description}
      focusMessage={focusmessage}
      blurbs={blurbs}
      featuredImage={featuredImage}
      prices={prices}
      contacts={contacts}
      social={footer.social}
      instagram={instagram}
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
        description
        featuredImage
        focusmessage {
          messagetitle
          messagedate
          messagedescription
        }
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
        contacts {
          contacttitle
          contactdescription
          contactaddress {
            contactstreet
            contactcity
          }
          contactphone
          contactemail
        }
        footer {
          social {
            facebook
            instagram
          }
        }
      }
    }

    instagram: allInstaNode(
      limit: 3
      sort: { order: DESC, fields: timestamp }
    ) {
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`
