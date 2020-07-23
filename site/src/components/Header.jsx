import { Link } from "gatsby"
import React from "react"
import ContextConsumer from "./Context"

import style from "./Header.module.scss"
import Logo from "../../static/icon.svg"
import LogoInverse from "../../static/icon-inverse.svg"
import LogoBlack from "../../static/icon-black.svg"

const Header = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <header className={style.header}>
        <div className={style.wrapper}>
          <Link to="/" style={{ display: "block" }}>
            {data.logo === "logo-black" ? (
              <LogoBlack className={`${style.logo} black`} />
            ) : data.logo === "logo-inverse" ? (
              <LogoInverse className={`${style.logo} inverse`} />
            ) : (
              <Logo className={`${style.logo} base`} />
            )}
          </Link>
        </div>
      </header>
    )}
  </ContextConsumer>
)

export default Header
