import * as cheerio from 'cheerio';
import moment from 'moment';
import config from '../config/index'

export const getData = (date) => {
  return new Promise(async(resolve, reject) => {
    const response = await fetch('https://nft-scraping-app-backend.onrender.com/getData?saleDate=' + moment(date).format("YYYY")+'-'+moment(date).format("MM")+'-'+moment(date).format("DD"), {
      method: 'get',
      headers: {
        "Content-Type": "application/json",
        'x-requested-with': 'temporary-access-page'
      }
    })
  if(response.ok) {
    const data = await response.text();
    const $ = cheerio.load(data);
    let temp = [];
    $('.my-2').not('.w-full').children().eq(1).children().eq(0).children().each((i, el)=> {
      temp.push({url:$(el).children('a').eq(0).attr('href'), name: $(el).find('h4').eq(0).text(), img: $(el).find('img').eq(0).attr('src')});
    });
    resolve(temp);

  } else {
    reject('error');
  }
  });
}