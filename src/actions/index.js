import * as cheerio from 'cheerio';
import moment from 'moment';
import config from '../config/index'

export const getData = (date) => {
  return new Promise(async(resolve, reject) => {
    const response = await fetch(config.cors_proxy_url + config.scraping_host_url+'?saleDate=' + moment(date).format("YYYY")+'-'+moment(date).format("MM")+'-'+moment(date).format("DD"), {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    })
  if(response.ok) {
    const data = await response.text();
    const $ = cheerio.load(data);
    const html = $('title').text();
    console.log(html);
  } else {
    reject('error');
  }
  });
}