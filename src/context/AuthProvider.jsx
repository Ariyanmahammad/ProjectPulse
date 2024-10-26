import React, { createContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'


export const AuthContext=createContext()
const AuthProvider = ({children}) => {
 
const [userData, setuserData] = useState(null)

useEffect(() => {
    setLocalStorage()
    const {employees,admin}=getLocalStorage()
    setuserData({employees,admin})

  return () => {
   
  }
},[])


  return (
    <div>
       <AuthContext.Provider value={userData}>
        {children}
       </AuthContext.Provider>
    </div>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
