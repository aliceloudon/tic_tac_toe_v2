import React from 'react'
import Square from './Square'

class Grid extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squares: [ 
        {index: 0},
        {index: 1},
        {index: 2},
        {index: 3},
        {index: 4},
        {index: 5},
        {index: 6},
        {index: 7},
        {index: 8},
        ],
      currentPlayer: 'x'
    }
  }

  render(){

    const gridSquares = this.state.squares.map( (square, index) => {
      return <Square key={index}></Square>
    })

    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div id='grid'>
          {gridSquares}
        </div>
      </div>
    )
  }

}

export default Grid