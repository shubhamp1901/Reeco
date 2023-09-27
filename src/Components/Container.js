import React from 'react'

const Container = ({children}) => {
  return (
    <div className="w-3/4 flex flex-row justify-between">
        {children}
    </div>
  )
}

export default Container