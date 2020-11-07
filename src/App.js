import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import MainPage from "MainPage.js";
import PricingPage from "pages/PricingPage.js";

import Main from "Main.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function App(){
  return (
      <Main />
  );
}


