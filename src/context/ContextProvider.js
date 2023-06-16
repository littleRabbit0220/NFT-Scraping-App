import { createContext, useState } from "react";

export const AppContext = createContext();

export default function ContextProvider({children}) {
  const [ state, setState ] = useState({viewMode: false});
  return (
    <AppContext.Provider value={{state, setState}}>
      {children}
    </AppContext.Provider>
  )
}

