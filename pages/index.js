import { createNews } from "../components/news.js";
import { getAllNews, postNews } from "../components/api.js";

const imageNews = document.querySelector('.news__image');
const titleNews = document.querySelector('.news__title');
const textNews = document.querySelector('.news__text');
const dataNews = document.querySelector('.news__data');

getAllNews()
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log('Error:', err);
})

postNews(imageNews, titleNews, textNews, dataNews)
.then((res) => {
  res.forEach((item) => {
    const news = createNews(item.url, item.title, item.description, item.published); 
    const newsContainer = document.querySelector(".news"); 
    newsContainer.prepend(news); 
  });
})
.catch((err) => {
    console.log('Error:', err);
})