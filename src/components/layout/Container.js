import React, { Children } from 'react'

const Container = ({Children}) => {
  return (
    <div className='max-w-container mx-auto'>{Children}</div>
  )
}

export default Container