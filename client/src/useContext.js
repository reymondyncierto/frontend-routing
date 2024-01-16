import { createContext } from 'react'
import { Display } from './views/Display'

export const UserContext = createContext() 

export const UseContext = () => {
  return (
    <UserContext.Provider value={'John'}> {/* UserContext.Provider is a component, it provides a value to all its children */}
      <Display />
    </UserContext.Provider>
  )
}