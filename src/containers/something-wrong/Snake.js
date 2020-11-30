import React from 'react'
import styles from './SomethingWrong.module.css'
import Roneli from './roneil2.png'

export default (props) => {
  const snake = props.coordinates.map((cell, i) => {
    const style = {
      left: `${cell[0]}%`,
      top: `${cell[1]}%`
    }

    return <img className={styles.snake} key={i} src={Roneli} style={style} />
  })

  return (
    <div>
      {snake}
    </div>
  )
}
