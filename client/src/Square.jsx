import React from 'react'

class Square extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      display: ''
    }
  }

  handleClick(){
    this.props.togglePlayer()
    if (this.props.currentPlayer === 'x'){
      this.setState({display: 'x'})
    }
    else {
      this.setState({display: 'o'})
    }
  }

  render(){
    return (
      <div className='square' onClick={this.handleClick.bind(this)}>{this.state.display}
        
      </div>
    )
  }

}

export default Square