import React from 'react'
import styles from '../../styles/HorizontalScroll.module.css'

function HorizontalScroll() {
  const scrollHandler = (event) => {
    event.preventDefault()
    const element = document.querySelector('.container')
    element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
    })
  }
  return (
    <div id={styles.container} className="container" onWheel={scrollHandler}>
      <p>
        Wissenaire, the annual techno-management fest of IIT Bhubaneswar is one
        of the biggest of its kind in East India. Encompassing various sectors
        of technology, science and management this three-day extravaganza is
        maneuvers it's participants through the world of futuristic
        technologies.
      </p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
    </div>
  )
}

export default HorizontalScroll
