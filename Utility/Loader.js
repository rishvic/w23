import React from 'react'
import styles from '../styles/Loader.module.scss'
import { TypeAnimation } from 'react-type-animation'
function Loader() {
  return (
    <div class={styles['wrap-loader']}>
      <TypeAnimation 
      class={styles.TypeAnimation}
      sequence={['WISSENAIRE', 1000,'AETERNIUM REIS']}
        speed={30} // Custom Speed from 1-99 - Default Speed: 40
        style={{ fontSize: '3rem', color:"white" }}
        wrapper="span" // Animation will be rendered as a <span>
        // repeat={Infinity} // Repeat this Animation Sequence infinitely
      />
      {/* <div class={styles['loader-text']}>Aeternium Reis</div> */}

    </div>
  )
}

export default Loader
