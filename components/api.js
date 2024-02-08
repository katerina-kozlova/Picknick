import { BASE_URL, token } from "./utils/constants.js";

function handleRequest(url, options) {
    return fetch(url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Что-то пошло не так...');
      })
  }

// Загрузка новостей с сервера
export function getAllNews() {
    return handleRequest(BASE_URL, {
      headers: {
        authorization: token
      }
    })
  }

export function postNews(urlToImage, title, description, publishedAt) {
    return handleRequest(BASE_URL, {
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: urlToImage,
        title: title,
        description: description,
        data: publishedAt
      })
    })
  }