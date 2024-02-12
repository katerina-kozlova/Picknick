export function getNewsFromTemplate() {
    const newsTemplate = document.querySelector(".new-template");
    return newsTemplate.content.cloneNode(true).querySelector(".news__element");
}

export function createNews(link, title, description, data) { 
    const news = getNewsFromTemplate();
    const imageNews = news.querySelector('.news__image');
    const titleNews = news.querySelector('.news__title');
    const textNews = news.querySelector('.news__text');
    const dataNews = news.querySelector('.news__data');

    imageNews.src = link; 
    titleNews.textContent = title; 
    textNews.textContent = description; 
    dataNews.textContent = data;
  
    return news; 
} 

