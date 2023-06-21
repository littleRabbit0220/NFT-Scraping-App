import moment from 'moment';
import cloneDeep from 'lodash/cloneDeep';
import NFTListItem from './NFTListItem';
import classnames from 'classnames';
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

const NFTList = ({currentDate, index, data}) => {
 
  const { state, setNumberOfPage } = useContext(AppContext);
  const [ list, setList ] = useState([]);
  
  // useEffect(() => {
  //   if(typeof state.search === 'string') {
  //     let temp = cloneDeep(state.data);
  //     temp = temp.filter((item) => item.name.indexOf(state.search)>=0);
  //     let len = temp.length;
  //     setNumberOfPage(parseInt(len/state.pageSize));
  //     if(state.currentPage * state.pageSize > len-1) {
  //       temp = temp.slice((state.currentPage-1)* state.pageSize, len-1);
  //     } else {
  //       temp = temp.slice((state.currentPage-1)* state.pageSize, state.currentPage * state.pageSize);
  //     }
      
  //     setList(cloneDeep(temp));
  //   }
  // }, [state.search, state.data, state.currentPage])
  return (
    <div className='mt-3'>
     <div className='flex flex-row'>
      <div className={classnames('mb-2 rounded-xl p-2 inline-block', {'bg-white text-slate-900':!state.viewMode, 'bg-slate-700':state.viewMode})}>
        <div className='text-2xl'>
          {months[parseInt(moment(currentDate).format("MM"))]}  {moment(currentDate).format("DD")+index}
        </div>
        <div className='text-xl text-center'>{data&&data.length} drops</div>
      </div>
     </div>
      <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
        {data&& data.map((item, index1)=> (
          <div key={index1}>
            <NFTListItem item={item}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NFTList;