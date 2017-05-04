import React from 'react'

class Square extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      display: '',
      alreadyClicked: false
    }
  }

  handleClick(){
    if(this.state.alreadyClicked === true){
      console.log('already clicked')
      return
    }
    this.props.togglePlayer()
    if (this.props.currentPlayer === 'x'){
      this.setState({display: 'x'})
    }
    else {
      this.setState({display: 'o'})
    }
    this.setState( {alreadyClicked: true} )
  }

  render(){
    return (
      <div className='square' onClick={this.handleClick.bind(this)}>
        {this.state.display}
      </div>
    )
  }

  declareWinner(){

  }

}

export default Square

// 012
// 345
// 678

// 036
// 147
// 258

// 048
// 246