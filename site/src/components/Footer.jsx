import React from "react"
import ContextConsumer from "./Context"

// import style from "./Footer.module.scss"

const Footer = () => {
  return (
    <ContextConsumer>
      {({ data, set }) => (
        <footer className="pad base-bg white-color">
          <div className="wrapper center-text">footer</div>
        </footer>
      )}
    </ContextConsumer>
  )
}

export default Footer
