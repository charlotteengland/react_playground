import React from 'react'
import LanguageContext from './LanguageContext'

export default function LangControls(props) {
  return (
    //Use consulmer on functional components. Here the Language.Consumer is used //with JSX like a component, it has a children //prop which is a function that returns more //JSX. The render prop here is like a mix //between callback prop and a children prop. //We've moved the JSX we want to return into the // return from the render prop.
        <LanguageContext.Consumer>
          {(value) => {
          
            return (
               <>
                <button 
                onClick={() => props.onSetLang('en-GB')}
                disabled={value.lang === 'en-GB'}>
                  British{' '}
                  <span role='img' aria-label='en-GB'>🇬🇧</span>
                </button>
                {' '}
                <button
                onClick={() => props.onSetLang('en-US')}
                disabled={value.lang === 'en-US'}>
                  American{' '}
                  <span role='img' aria-label='en-US'>🇺🇸</span>
                </button>
                {' '}
                <button
                onClick={() => props.onSetLang('ko')}
                disabled={value.lang === 'ko'}>
                  Korean{' '}
                  <span role='img' aria-label='ko'>🇰🇷</span>
                </button>
              </>
           )
          }}
        </LanguageContext.Consumer>
       );
     }