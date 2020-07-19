import { Link } from "gatsby"
import React from "react"
import ContextConsumer from "./Context"

import style from "./Header.module.scss"
import Logo from "../../static/icon.svg"

const Header = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <header>
        <div className={style.wrapper}>
          <Link to="/" style={{ display: "block" }}>
            <Logo className={style.logo} />
          </Link>
        </div>
      </header>
    )}
  </ContextConsumer>
)

export default Header
