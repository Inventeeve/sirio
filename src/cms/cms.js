import React from "react"
import CMS from "netlify-cms-app"
import { it } from 'netlify-cms-locales';
import "../css/index.css"

import HomePageTemplate from "../templates/HomePageTemplate"
CMS.registerLocale('it', it);
CMS.registerPreviewTemplate("home-page", ({ entry }) => {
  return <HomePageTemplate {...entry.toJS().data} />
})
