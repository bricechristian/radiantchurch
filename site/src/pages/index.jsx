import React, { useEffect } from "react"
// import { graphql } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/SEO"

import Hero from "../components/Home/Hero"

const IndexPage = props => {
  //sets menu to be closed on page mount
  const { set } = props
  useEffect(() => {
    set({ menuOpen: false, logo: "logo" })
  }, [])

  return (
    <>
      <SEO title="Radiant Church | Charleston, SC" />
      <div className="page" id="home">
        <Hero />
        <Link to="/about-us">About Us</Link>
      </div>
    </>
  )
}

export default IndexPage
