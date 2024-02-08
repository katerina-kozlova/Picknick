import { createNews } from "../components/news.js";
import { getAllNews, postNews } from "../components/api.js";


getAllNews()
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log('Error:', err);
})

const imageNews = document.querySelector('.news__image');
const titleNews = document.querySelector('.news__title');
const textNews = document.querySelector('.news__text');
const dataNews = document.querySelector('.news__data');

postNews(urlToImage, title, description, publishedAt)
.then((res) => {
    const news = createNews(res, res.urlToImage, res.title, res.description, res.publishedAt);
    const newsContainer = document.querySelector(".news");
    newsContainer.prepend(news);
})
.catch((err) => {
    console.log('Error:', err);
})