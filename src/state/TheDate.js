import React from 'react';

class TheDatee extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      datetime: new Date()};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {  
    console.log('render')
    return (
    <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}

// export default TheDate;