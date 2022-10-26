import React, { useState } from 'react'
import AppContext from './AppContext'


const ContextProvider = ({children}) => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [openCartDrawer, setOpenCartDrawer] = useState(false)
    const [mobileNavBar, setMobileNavBar] = useState(false)
    const [adminNav, setAdminNav] = useState('dashboard')
    const [currPage, setCurrPage] = useState('home')
    
  return (
    <AppContext.Provider value={{openDrawer, setOpenDrawer, openCartDrawer, 
            setOpenCartDrawer, mobileNavBar, setMobileNavBar,
            adminNav, setAdminNav, currPage, setCurrPage
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider