import React, { useEffect } from "react"
// import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Footer from "../components/Footer"

import Hero from "../components/GlobalBlocks/Hero/Hero"
import Intro from "../components/About/Intro"

const AboutUsPage = props => {
  //sets menu to be closed on page mount
  const { set } = props
  useEffect(() => {
    setTimeout(() => {
      set({ menuOpen: false, logo: "logo-black" })
    }, 400)
  }, [])

  return (
    <>
      <SEO title="About Us" />
      <div className="page" id="about-us">
        <Hero
          pageTitle={`About Us`}
          headline={`Who <em>we are,</em><br>where we come from,<br>and where we're headed<br>as a church family`}
          padding={150}
          bg={"yellow-bg"}
          color={"white-color"}
        />
        <Intro />
        <Footer />
      </div>
    </>
  )
}

export default AboutUsPage
