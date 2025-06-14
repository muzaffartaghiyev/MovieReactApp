import React,{createContext} from 'react'

export const MovieContext = createContext()

const MovieProvider = ({children}) => {
  return (
    <MovieContext.Provider value={{}}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider