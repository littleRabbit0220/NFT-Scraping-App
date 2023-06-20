import moment from 'moment';
import NFTListItem from './NFTListItem';
import data from './data.json';

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
  return (
    <div >
     <div className='flex flex-row justify-center'>
      <div className='bg-blue-500  mb-2 rounded-xl p-5 inline-block'>
        <div className='text-4xl text-white text-center'>{moment(currentDate).format("DD")}</div>
        <div className='text-3xl text-white'>
          {months[parseInt(moment(currentDate).format("MM"))]}, {moment(currentDate).format("YYYY")}
        </div>
      </div>
     </div>
      <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
        {data.map((item, index)=> (
          <div key={index}>
            <NFTListItem item={item}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NFTList;