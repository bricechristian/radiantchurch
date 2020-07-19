import React from "react"
import { isMobile } from "mobile-device-detect"

import style from "./Hero.module.scss"

const Hero = props => {
  const { headline, padding } = props
  return (
    <section
      className={`${style.hero} pad`}
      style={{ paddingTop: `${!isMobile ? padding : padding * 0.5}px` }}
    >
      <div className="wrapper">
        <h1 className="tilt-font text-xl">{headline}</h1>
      </div>
    </section>
  )
}

export default Hero
