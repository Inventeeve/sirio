import React from "react"
import CMS from "netlify-cms-app"
import "../css/index.css"

import HomePageTemplate from "../templates/HomePageTemplate"

CMS.registerPreviewTemplate("home-page", ({ entry }) => {
  return <HomePageTemplate {...entry.toJS().data} />
})
