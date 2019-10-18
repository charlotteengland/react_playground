import React from 'react';

class Hello extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      who: "apple"
    }
  }



  render() {
    return ( <div>
        <p>Hello, {this.state.who}!</p>
          <button onClick={() => this.setState({ who: 'Louie'})} >
            Louie
          </button>
          <button onClick={() => this.setState({ who: 'Grandpa'})}>
          Grandpa
          </button>
          <button onClick={() => this.setState({ who: 'Izzy'})}>
          Izzy
        </button>
      </div>
    )
  }
}

export default Hello;