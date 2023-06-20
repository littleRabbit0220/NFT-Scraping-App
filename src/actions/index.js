import axios from 'axios';
import config from '../config/index'

const corsProxy = 'https://cors-anywhere.herokuapp.com/';


export const getData = (date) => {

  return new Promise((resolve, reject) => {
    fetch(corsProxy + config.scraping_host_url, {
      method: 'get'
    })
      .then(res => {
        console.log(res.data, 'data')
        resolve(res.data)
      })
      .catch(err =>  {
        console.log(err, 'error')
        reject(err)
      })
  });
}