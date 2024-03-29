import React, { Component } from "react";
import Child from './Child';
import LangControls from './LangControls';
import LanguageContext from './LanguageContext'

export default class AppLang extends Component {
  state = {
    lang: window.navigator.language
  };

  handleSetLang = (lang) => {
      this.setState({ lang })
  };

  render() {
    const contextValue = {
      lang: this.state.lang
    }
    return (
      <LanguageContext.Provider
        value={{ lang: window.navigator.language }}>
         <div className='AppLang'>
           <LangControls />
        <div className='AppLang'>
          <LangControls
            onSetLang={this.handleSetLang}
            />
          <Child/>
        </div>
        </LanguageContext.Provider>
    );
  }
}