import React from 'react'
import styles from '../styles/Loader.module.scss'

function Loader() {
  return (
    <div class={styles['wrap-loader']}>
      <div class={styles.loader}>
        <div class={styles.box}></div>
        <div class={styles.box}></div>
        <div class={styles.box}></div>
        <div class={styles.box}></div>
        <div class={styles['wrap-text']}>
          <div class={styles.text}>
            <span>W</span>
            <span>I</span>
            <span>S</span>
            <span>S</span>
            <span>E</span>
            <span>N</span>
            <span>A</span>
            <span>I</span>
            <span>R</span>
            <span>E</span>
            <span>...</span>
          </div>
        </div>
      </div>
      <div class={styles['loader-text']}>Aeternium Reis</div>
    </div>
  )
}

export default Loader
