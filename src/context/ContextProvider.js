import { createContext, useState } from "react";
import cloneDeep from 'lodash/cloneDeep';

export const AppContext = createContext();

export default function ContextProvider({children}) {
  const [ state, setState ] = useState({viewMode: false, data: []});
  const setData = (data) => {
    setState((state) => ({...state, data: cloneDeep(data)}));
  }
  return (
    <AppContext.Provider value={{state, setState, setData}}>
      {children}
    </AppContext.Provider>
  )
}

