import NFTListItem from './NFTListItem';
import data from './data.json';

const NFTList = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
      {data.map((item, index)=> (
        <div key={index}>
          <NFTListItem item={item}/>
        </div>
      ))}
    </div>
  )
}

export default NFTList;