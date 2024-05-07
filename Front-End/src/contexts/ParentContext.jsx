import React, { createContext, useState } from 'react'
export const AppContext = createContext()
const ParentContext = ({children}) => {
    const[likes,Islikes] = useState(20)
    const[clicked,SetClicked] = useState(false)
  return <AppContext.Provider value={{likes,Islikes,clicked,SetClicked}}>
    {children}
  </AppContext.Provider>
}

export default ParentContext