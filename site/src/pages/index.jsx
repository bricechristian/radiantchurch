import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

import Hero from "../components/Home/Hero"

const IndexPage = props => {
  //sets menu to be closed on page mount
  const { set } = props
  useEffect(() => {
    set({ menuOpen: false })
  }, [])

  return (
    <>
      <SEO title="Radiant Church | Charleston, SC" />
      <div className="page" id="home">
        <Hero />
      </div>
    </>
  )
}

export default IndexPage
