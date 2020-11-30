import React, { Component } from 'react'

import Snake from './Snake'
import Turkey from './Turkey'

import styles from './SomethingWrong.module.css'

const STEP_SIZE = 10
const getRandomCoordinates = () => {
  let min = 1
  let max = 98
  let x = Math.floor((Math.random() * (max - min + 1) + min) / STEP_SIZE) * STEP_SIZE
  let y = Math.floor((Math.random() * (max - min + 1) + min) / STEP_SIZE) * STEP_SIZE
  return [x, y]
}

const initialState = {
  turkeyCoordinates: getRandomCoordinates(),
  snakeCoordinates: [ [0, 0] ],
  direction: 'RIGHT',
  speed: 200
}
export default class SnakeBoard extends Component {
    state = initialState

    componentDidMount () {
      setInterval(this.moveSnake, this.state.speed)
      document.onkeydown = this.onKeyDown
    }

    componentDidUpdate () {
      this.checkIfOutOfBorders()
      this.checkIfCollapsed()
      this.checkIfEat()
    }

    onKeyDown = (e) => {
      e = e || window.event
      switch (e.keyCode) {
        case 38:
          this.setState({ direction: 'UP' })
          break
        case 40:
          this.setState({ direction: 'DOWN' })
          break
        case 37:
          this.setState({ direction: 'LEFT' })
          break
        case 39:
          this.setState({ direction: 'RIGHT' })
          break
      }
    }

    moveSnake = () => {
      let coordinates = [...this.state.snakeCoordinates]
      let head = coordinates[coordinates.length - 1]

      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + STEP_SIZE, head[1]]
          break
        case 'LEFT':
          head = [head[0] - STEP_SIZE, head[1]]
          break
        case 'DOWN':
          head = [head[0], head[1] + STEP_SIZE]
          break
        case 'UP':
          head = [head[0], head[1] - STEP_SIZE]
          break
      }

      coordinates.push(head)
      coordinates.shift()
      this.setState({
        snakeCoordinates: coordinates
      })
    }

    checkIfOutOfBorders () {
      let head = this.state.snakeCoordinates[this.state.snakeCoordinates.length - 1]
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        this.onGameOver()
      }
    }

    checkIfCollapsed () {
      let snake = [...this.state.snakeCoordinates]
      let head = snake[snake.length - 1]
      snake.pop()
      snake.forEach(cell => {
        if (head[0] === cell[0] && head[1] === cell[1]) {
          this.onGameOver()
        }
      })
    }

    checkIfEat () {
      let head = this.state.snakeCoordinates[this.state.snakeCoordinates.length - 1]
      let food = this.state.turkeyCoordinates

      console.log('what is head', head)
      console.log('what is turkeyCoordinates', food)
      if (head[0] === food[0] && head[1] === food[1]) {
        this.setState({
          turkeyCoordinates: getRandomCoordinates()
        })
        this.enlargeSnake()
        this.increaseSpeed()
      }
    }

    enlargeSnake () {
      let newSnake = [...this.state.snakeCoordinates]
      newSnake.unshift([])
      this.setState({
        snakeCoordinates: newSnake
      })
    }

    increaseSpeed () {
      if (this.state.speed > 10) {
        this.setState({
          speed: this.state.speed - 10
        })
      }
    }

    onGameOver () {
      console.log(`Game Over. Snake length is ${this.state.snakeCoordinates.length}`)
      this.setState(initialState)
    }

    render () {
      return (
        <div className={styles.grid} >
          <Snake
            coordinates={this.state.snakeCoordinates}
          />
          <Turkey coordinates={this.state.turkeyCoordinates} />
        </div>
      )
    }
}
