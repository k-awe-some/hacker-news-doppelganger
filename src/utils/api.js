const api = "https://hacker-news.firebaseio.com/v0/";
const json = ".json?print=pretty";

export const fetchItem = id =>
  fetch(`${api}item/${id}${json}`)
    .then(res => res.json())
    .then(item => item);

export const fetchMainPosts = type =>
  fetch(`${api}${type}${json}`)
    .then(res => res.json())
    .then(ids => ids.slice(0, 50))
    .then(ids => Promise.all(ids.map(id => fetchItem(id))))
    .then(posts => posts)
    .catch(error => {
      console.log(error);
    });
