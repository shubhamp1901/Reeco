import React from 'react'
import SubItems from './SubItems'
import ShowCase from './ShowCase'
import Items from './Items'

const MainContent = () => {
  return (
    <div className='h-full bg-gray-100'>
        <ShowCase />
        <SubItems />
        <Items />
    </div>
  )
}

export default MainContent