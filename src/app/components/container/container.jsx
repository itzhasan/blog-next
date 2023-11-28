import React from 'react'
import styles from "./container.module.css"
function container({ children }) {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default container