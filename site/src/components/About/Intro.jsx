import React from "react"

import style from "./Intro.module.scss"

const Intro = () => {
  return (
    <section className={`${style.intro} pad`}>
      <div className="flex grid two">
        <div className={style.image_left}>
          <img src="https://via.placeholder.com/1000x1200" alt="" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1000x1200" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Intro
