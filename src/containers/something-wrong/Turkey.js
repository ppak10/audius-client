import React from 'react'
import styles from './SomethingWrong.module.css'

export default (props) => {
  const style = {
    left: `${props.coordinates[0]}%`,
    top: `${props.coordinates[1]}%`
  }

  return (
    <div className={styles.turkey} style={style}>🦃</div>
  )
}
