import React, { Component } from 'react'
import languageSpecificCopy from './LanguageSpecificCopy';
import LanguageContext from './LanguageContext';

class GreatGrandChild extends Component {
  // key words are - static contectType
  static contextType = LanguageContext;
  render() {
    
    //below is the hardcoaded object
    //const copy = languageSpecificCopy['en-US'] || {}
    const copy = languageSpecificCopy[this.context.lang] || {}
    return (
      <section>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </section>
    )
  }
}

export default GreatGrandChild