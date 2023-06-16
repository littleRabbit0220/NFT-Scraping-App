import classnames from 'classnames';
const Search = ({viewMode}) => {
  return (
    <div className={classnames("max-w-[400px] bg-white text-2xl flex flex-row p-2 rounded shadow",{"bg-slate-700 text-white":viewMode})}>
      <div ><i className="fa fa-search"></i></div>
      <input type="text" className={classnames("focus:outline-none w-full ml-2",{"bg-slate-700":viewMode})} placeholder="Search the NFT..."/>
    </div>
  )
}

export default Search;