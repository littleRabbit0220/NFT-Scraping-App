import * as cheerio from 'cheerio';
import config from '../config/index'

export const getData = (date) => {
  return new Promise(async(resolve, reject) => {
    const response = await fetch(config.cors_proxy_url + config.scraping_host_url, {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    })
  if(response.ok) {
    const data = await response.text();
    const $ = cheerio.load(data);
  } else {
    reject('error');
  }
  });
}