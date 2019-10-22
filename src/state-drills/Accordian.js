import React from "react";
import './Accordian.css'

class Accordian extends React.Component {
  static defaultProps= {
    sections: []
  }

  state = { 
    currentSectionIndex: 0
  }

  handleButtonClick(index) {
    this.setState({ currentSectionIndex: index})
  }

  renderButtons() {
    return this.props.sections.map((section, index) => (
      <button key={index} onClick=                 {() => this.handleButtonClick(index)}>
        {section.title}
      </button>
    ))
  }

  renderColumn() {
    const currentColumn = this.props.sections[this.state.currentSectionIndex]
    return (
      <p className='content'>
        {currentColumn.content}
      </p>
    )
  }

  render() {
    return (
      <ul>
        {this.renderButtons()}
        {this.props.sections.length && this.renderColumn()}
      </ul>
    )
  }
}

export default Accordian;