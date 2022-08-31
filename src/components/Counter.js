import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    plusClick=()=>{
        console.log('click')
        this.setState({
            count:this.state.count+1
        })
    }

    minusClick= ()=>{
        console.log('min')
        this.setState({
            count:this.state.count-1
        })
    }

  render() {
    const {count} = this.state
    return (
     <div className='kei'>
     <div className='pi'>counter is : {count} </div>
     <button onClick={this.plusClick}>+</button>
     <button onClick={this.minusClick}>-</button>
     </div>
    )
  }
}
