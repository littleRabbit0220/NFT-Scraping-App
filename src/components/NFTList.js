import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import NFTListItem from './NFTListItem';
import data from './data.json';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/ContextProvider';

const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const NFTList = ({currentDate}) => {
  const { state, setNumberOfPage } = useContext(AppContext);
  const [ list, setList ] = useState([]);
  
  useEffect(() => {
    if(typeof state.search === 'string') {
      let temp = cloneDeep(state.data);
      temp = temp.filter((item) => item.name.indexOf(state.search)>=0);
      let len = temp.length;
      setNumberOfPage(parseInt(len/state.pageSize));
      if(state.currentPage * state.pageSize > len-1) {
        temp = temp.slice((state.currentPage-1)* state.pageSize, len-1);
      } else {
        temp = temp.slice((state.currentPage-1)* state.pageSize, state.currentPage * state.pageSize);
      }
      
      setList(cloneDeep(temp));
    }
  }, [state.search, state.data, state.currentPage])
  return (
    <div >
     <div className='flex flex-row justify-center'>
      {/* <div className='bg-blue-500  mb-2 rounded-xl p-5 inline-block'>
        <div className='text-4xl text-white text-center'>{moment(currentDate).format("DD")}</div>
        <div className='text-3xl text-white'>
          {months[parseInt(moment(currentDate).format("MM"))]}, {moment(currentDate).format("YYYY")}
        </div>
      </div> */}
     </div>
      <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
        {list&& list.map((item, index)=> (
          <div key={index}>
            <NFTListItem item={item}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NFTList;