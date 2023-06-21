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
    
    $('.my-2').not('.w-full').children().each((index, el) => {
      let item = [];
      if(index % 2 === 1) {
        $(el).children().eq(0).children().each((index2, el2) => {
          item.push({
            url:$(el2).children('a').eq(0).attr('href'), 
            name: $(el2).find('h4').eq(0).text(), 
            img: $(el2).find('img').eq(0).attr('src'),
            crypto:$(el2).find('h4').eq(0).next().children().eq(0).children().eq(0).text(),
            date:  $(el2).find('blockquote').children().eq(0).children().eq(1).children().eq(1).text(),
            timezone: $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().length===3?(
              $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(0).children().eq(2).children().eq(1).children().eq(0).text()):(
                $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(2).children().eq(0).text()
                ),
            twitter: $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().length===3?(
              $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(1).text()):(
                $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(2).find('a').eq(0).attr('href')),
            value: $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().length===3?(
              $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(2).children().eq(1).text()):(
                $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(2).children().eq(1).children().eq(1).text()
                ),
            discord: $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().length===3?(
              $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(2).text()):(
                $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(3).find('a').eq(0).attr('href')),
            amount: $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().length===3?(
              $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(2).children().eq(1).text()):(
                $(el2).children().eq(1).children().eq(1).children().eq(1).children().eq(1).children().eq(3).children().eq(1).text()),
          });
        })
        if(item.length !== 0) temp.push(item);
      }
      
    });
    resolve(temp);

  } else {
    reject('error');
  }
  });
}