import React from "react"
import ContextConsumer from "../../Context"
import { isMobile } from "react-device-detect"
import VizSensor from "react-visibility-sensor"

import style from "./Hero.module.scss"

const Hero = props => {
  const { headline, padding, bg, color } = props
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
              className={`${style.hero} ${bg} pad`}
              style={{ paddingTop: `${!isMobile ? padding : padding * 0.5}px` }}
            >
              <div className="wrapper">
                <h1 className={`text-6xl ${color}`}>{headline}</h1>
              </div>
            </section>
          </VizSensor>
        )
      }}
    </ContextConsumer>
  )
}

export default Hero
