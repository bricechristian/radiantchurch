import React from "react"
import ContextConsumer from "../../Context"
import { isMobile } from "react-device-detect"

import style from "./Hero.module.scss"

const Hero = props => {
  const { headline, padding, bg } = props
  return (
    <ContextConsumer>
      {({ data, set }) => {
        return (
          <>
            <section
              className={`${style.hero} ${bg} pad`}
              style={{ paddingTop: `${!isMobile ? padding : padding * 0.5}px` }}
            >
              <div className="wrapper">
                <h1 className="text-xl">{headline}</h1>
              </div>
            </section>
          </>
        )
      }}
    </ContextConsumer>
  )
}

export default Hero
