import { createContext, useState } from "react";
import cloneDeep from 'lodash/cloneDeep';
import data1 from '../components/data.json';

export const AppContext = createContext();

export default function ContextProvider({children}) {
  const [ state, setState ] = useState(
    {
      viewMode: false, 
      data: data1, 
      search: '',   
      currentPage: 1, 
      pageSize: 4, 
      numberOfPage: 1
    });
  const setData = (data) => {
    setState((state) => ({...state, data: cloneDeep(data)}));
  }
  const setSearchWord = (word) =>  {
    setState((state) => ({...state, search: word}));
  }
  const setCurrentPage = (page) => {
    setState((state) => ({...state, currentPage: page}));
  }
  const setPageSize = (size) => {   
    setState((state) => ({...state, pageSize: size}));
  }
  const setNumberOfPage = (number) => {
    setState((state) => ({...state, numberOfPage: number}));
  }
  return (
    <AppContext.Provider value={{state, setState, setData, setSearchWord, setCurrentPage, setPageSize, setNumberOfPage}}>
      {children}
    </AppContext.Provider>
  )
}

