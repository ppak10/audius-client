import React, { useState, useEffect, useRef } from 'react'

import Turkey from './turkey.png'
import Roneli from './roneil2.png'
import styles from './SomethingWrong.module.css'

const SnakeBoard = () => {
  const height = 10
  const width = 10
  const initialRows = []
  for (let i = 0; i < height; i++) {
    initialRows.push([])
    for (let k = 0; k < width; k++) {
      initialRows[i].push('blank')
    }
  }

  const randomPosition = () => {
    const position = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    }
    return position
  }

  const [rows, setRows] = useState(initialRows)
  const [snake, setSnake] = useState([{ x: 0, y: 0 }, { x: 1, y: 0 }])
  const [direction, setDirection] = useState('right')
  const [food, setFood] = useState(randomPosition)

  const changeDirectionWithKeys = (e) => {
    var { keyCode } = e
    switch (keyCode) {
      case 37:
        setDirection('left')
        break
      case 38:
        setDirection('top')
        break
      case 39:
        setDirection('right')
        break
      case 40:
        setDirection('bottom')
        break
      default:
        break
    }
  }

  document.addEventListener('keydown', changeDirectionWithKeys, false)

  const displaySnake = () => {
    const newRows = initialRows
    let setHead = false
    snake.forEach(cell => {
      if (!setHead) {
        newRows[cell.x][cell.y] = 'head'
        setHead = true
      } else {
        newRows[cell.x][cell.y] = 'snake'
      }
    })
    newRows[food.x][food.y] = 'food'
    setRows(newRows)
  }

  const moveSnake = () => {
    const newSnake = []
    switch (direction) {
      case 'right':
        newSnake.push({ x: snake[0].x, y: (snake[0].y + 1) % width })
        break
      case 'left':
        newSnake.push({ x: snake[0].x, y: (snake[0].y - 1 + width) % width })
        break
      case 'top':
        newSnake.push({ x: (snake[0].x - 1 + height) % height, y: snake[0].y })
        break
      case 'bottom':
        newSnake.push({ x: (snake[0].x + 1) % height, y: snake[0].y })
    }
    snake.forEach(cell => {
      newSnake.push(cell)
    })
    if (snake[0].x === food.x && snake[0].y === food.y) {
      setFood(randomPosition)
    } else {
      newSnake.pop()
    }
    setSnake(newSnake)
    displaySnake()
  }

  useInterval(moveSnake, 120)

  function useInterval (callback, delay) {
    const savedCallback = useRef()

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick () {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  const displayRows = rows.map(row =>
    <div class={styles.row}>
      {row.map(el => {
        switch (el) {
          case 'blank':
            return <div class={styles.square} />
          case 'snake':
            return <div class={styles.snake} />
          case 'food':
            return <img class={styles.turkey} src={Turkey} />
          case 'head':
            return <img class={styles.turkey} src={Roneli} />
        }
      })}
    </div>
  )

  return (
    <div>
      {displayRows}
    </div>
  )
}

export default SnakeBoard
