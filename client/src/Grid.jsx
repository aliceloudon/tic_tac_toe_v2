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
      currentPlayer: ''
    }
  }

  togglePlayer(){
    let newPlayer
    if(this.state.currentPlayer === 'x'){
      newPlayer = 'o'
    }
    else {
      newPlayer = 'x'
    }
    this.setState({currentPlayer: newPlayer})
  }

  render(){
    const gridSquares = this.state.squares.map( (square, index) => {
      return <Square 
        key={index} 
        togglePlayer={this.togglePlayer.bind(this)}
        currentPlayer={this.state.currentPlayer}
        >
        </Square>
    })
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className='grid'>
          {gridSquares}
        </div>
      </div>
    )
  }

}

export default Grid