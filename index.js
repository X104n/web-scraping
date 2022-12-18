const axios = require("axios");
const cheerio = require("cheerio");
const fetchTitles = async () => {
    try {
        const response = await axios.get('https://old.reddit.com/r/DunderMifflin/');
        const html = response.data;
        console.log(html);
        const $ = cheerio.load(html);
        const titles = [];
        $('div > p.title > a').each((_idx, el) => {
            const title = $(el).text()
            titles.push(title)
        });
        return titles;
    } catch (error) {
        throw error;
    }
};
fetchTitles().then((titles) => console.log(titles));

// Something to do with this website: https://www.webscrapingapi.com/the-ultimate-guide-to-web-scraping-with-javascript-and-node-js
