import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import Hero from "components/hero/HeroWithVideo.js";
import MainFeature from "components/features/ThreeColCenteredWithStatsBg.js";
import SubFeature from "components/features/TwoColWithSteps.js";
import Testimonial from "components/testimonials/TwoColWithImageReviewSlider.js";
import Footer from "components/footers/FiveColDark.js";

export default () => (
  <div>
    <Hero />
    <MainFeature />
    <SubFeature />
    <Testimonial />
    <Footer />
  </div>   
);