import React from "react"
import CMS from "netlify-cms-app"

import { HomePageTemplate } from "../templates/HomePage"

CMS.registerPreviewTemplate('home-page', ({ entry }) => {
  return <HomePageTemplate {...entry.toJS().data} />;
});
