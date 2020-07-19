import React, { useEffect } from "react"
// import { graphql } from "gatsby"
import SEO from "../components/SEO"

import Hero from "../components/GlobalBlocks/Hero/Hero"

const AboutUsPage = props => {
  //sets menu to be closed on page mount
  const { set } = props
  useEffect(() => {
    set({ menuOpen: false, logo: "logo-black" })
  }, [])

  return (
    <>
      <SEO title="About Us" />
      <div className="page" id="home">
        <Hero
          headline={
            "Who we are, where we come from, and where we're headed as a church family"
          }
          padding={150}
          bg={"yellow-bg"}
        />
      </div>
    </>
  )
}

export default AboutUsPage
