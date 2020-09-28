import React from 'react'
import Typed from 'react-typed'

const TypedContainer = ({words}) => {
  return (
    <Typed
        strings={words}
        typeSpeed={80}
        backSpeed={50}
        smartBackspace={true}
        backDelay={1000}
        loop={true}
        showCursor={false}
    />
  )
}

export default TypedContainer
