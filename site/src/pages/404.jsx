import React, { useEffect } from "react"
import SEO from "../components/SEO"

const NotFoundPage = props => {
  //sets menu to be closed on page mount
  const { set } = props
  useEffect(() => {
    set({ menuOpen: false })
  }, [])
  return (
    <>
      <SEO title="404: Not found" />
      <div className="page">
        <section className="pad">
          <div className="wrapper content center-text">
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default NotFoundPage
