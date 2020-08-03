import React from "react"
import ContextConsumer from "../../Context"
import { isMobile } from "react-device-detect"
import VizSensor from "react-visibility-sensor"
import parse from "html-react-parser"
import Underline from "../../../../static/underline1_black.svg"

import style from "./Hero.module.scss"

const Hero = props => {
  const { pageTitle, headline, padding, bg, color } = props
  return (
    <ContextConsumer>
      {({ data, set }) => {
        return (
          <VizSensor
            partialVisibility
            minTopValue={data.winHeight}
            onChange={isVisible => {
              isVisible &&
                set({
                  hamburgerColor: bg === "yellow-bg" ? "black" : "white",
                  logo: bg === "yellow-bg" ? "logo-black" : "logo-inverse",
                })
            }}
          >
            <section
              className={`${style.hero} hero ${bg} pad`}
              style={{ paddingTop: `${!isMobile ? padding : padding * 0.5}px` }}
            >
              <div className={`${style.wrapper} wrapper`}>
                <h1
                  className={`${style.page_title} gilroy-light-font text-xl lowercase`}
                  style={{ paddingRight: 0 }}
                >
                  {pageTitle}
                </h1>
                <h2 className={`text-6xl ${color}`}>{parse(headline)}</h2>
              </div>
            </section>
          </VizSensor>
        )
      }}
    </ContextConsumer>
  )
}

export default Hero
