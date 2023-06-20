import { AppContext } from '@/context/ContextProvider';
import classnames from 'classnames';
import { useContext } from 'react';
const Search = ({viewMode}) => {
  const { state, setSearchWord } = useContext(AppContext);
  return (
    <div 
      className={classnames("max-w-[400px] text-2xl flex flex-row p-2 rounded shadow",{"bg-white":!viewMode,"bg-slate-700 text-white":viewMode})}
    >
      <div >
        <i className="fa fa-search"></i>
      </div>
      <input 
        type="text" 
        className={classnames("focus:outline-none w-full ml-2",{"bg-slate-700":viewMode})} 
        value={state.search}
        placeholder="Search the NFT..."
        onChange={(e) => {setSearchWord(e.target.value)}}
      />
    </div>
  )
}

export default Search;