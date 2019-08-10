const api = "https://hacker-news.firebaseio.com/v0/";
const json = ".json?print=pretty";

export const fetchUser = async id => {
  const res = await fetch(`${api}user/${id}${json}`);
  const user = await res.json();
  return user;
};

export const fetchItem = async id => {
  const res = await fetch(`${api}item/${id}${json}`);
  const item = await res.json();
  return item;
};

const onlyStories = items => items.filter(({ type }) => type === "story");

export const fetchPosts = ids => {
  const posts = Promise.all(ids.map(id => fetchItem(id))).then(items =>
    onlyStories(items)
  );
  return posts;
};

export const fetchMainPosts = async type => {
  try {
    const res = await fetch(`${api}${type}${json}`);
    const data = await res.json();
    const ids = await data.slice(0, 50);
    const posts = Promise.all(ids.map(id => fetchItem(id)));
    return posts;
  } catch (error) {
    return error.message;
  }
};
