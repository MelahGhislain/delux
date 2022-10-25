import React, { useState } from 'react'
import AppContext from './AppContext'


const ContextProvider = ({children}) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [openCartDrawer, setOpenCartDrawer] = useState(false)
    const [mobileNavBar, setMobileNavBar] = useState(false)
    const [adminNav, setAdminNav] = useState('dashboard')
    
  return (
    <AppContext.Provider value={{openDrawer, setOpenDrawer, openCartDrawer, 
            setOpenCartDrawer, mobileNavBar, setMobileNavBar,
            adminNav, setAdminNav
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider