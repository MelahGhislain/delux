import React, { useState } from 'react'
import AppContext from './AppContext'


const ContextProvider = ({children}) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [openCartDrawer, setOpenCartDrawer] = useState(false)
    
  return (
    <AppContext.Provider value={{openDrawer, setOpenDrawer, openCartDrawer, setOpenCartDrawer}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider