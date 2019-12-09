import React from 'react' 

//  below we added context to a static property called contextType, this will give us a new instance property this.context.
const LanguageContext = React.createContext({
  lang: window.navigator.language
})

export default LanguageContext