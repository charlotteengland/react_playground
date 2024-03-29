import React from 'react'
import './Splits.css'


function Split(props) {
  const combinedClassName = `split ${props.className}`;
  const newStyles = { flex: props.flexBasis, backgroundColor: props.backColor };
  return (
    <div className={combinedClassName}
        style={newStyles}>
      {props.children}
    </div>
  )
}

export default Split;

