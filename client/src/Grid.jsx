import React from 'react'
import Square from './Square'

class Grid extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squares: [ 
        {index: 0, isClicked: false},
        {index: 1, isClicked: false},
        {index: 2, isClicked: false},
        {index: 3, isClicked: false},
        {index: 4, isClicked: false},
        {index: 5, isClicked: false},
        {index: 6, isClicked: false},
        {index: 7, isClicked: false},
        {index: 8, isClicked: false},
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
        ></Square>
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