import React from "react"
// import { Link, navigate } from "gatsby"
import ContextConsumer from "./Context"
import Hamburger from "../../static/hamburger.svg"
import HamburgerClose from "../../static/hamburger-close.svg"

import style from "./Menu.module.scss"

const Menu = props => {
  const { location } = props

  return (
    <ContextConsumer>
      {({ data, set }) => {
        return (
          <>
            <div className={`${style.menu} ${data.menuOpen ? style.open : ""}`}>
              <div className={style.wrapper}>
                <Hamburger
                  className={`${style.hamburger} ${
                    data.menuOpen ? style.open : ""
                  } show_860`}
                  onClick={() => {
                    set({ menuOpen: !data.menuOpen })
                  }}
                />
                <HamburgerClose
                  className={`${style.hamburgerClose} show_860`}
                  onClick={() => {
                    set({ menuOpen: !data.menuOpen })
                  }}
                />
              </div>
            </div>
          </>
        )
      }}
    </ContextConsumer>
  )
}

export default Menu
