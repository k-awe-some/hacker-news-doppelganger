const api = "https://hacker-news.firebaseio.com/v0/";
const json = ".json?print=pretty";

const removeDead = items =>
  items.filter(Boolean).filter(({ dead }) => dead !== true);

const removeDeleted = items => items.filter(({ deleted }) => deleted !== true);

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
    removeDeleted(onlyStories(removeDead(items)))
  );
  return posts;
};

const onlyComments = items => items.filter(({ type }) => (type = "comment"));
export const fetchComments = ids => {
  const comments = Promise.all(ids.map(id => fetchItem(id))).then(items =>
    removeDeleted(onlyComments(removeDead(items)))
  );
  return comments;
};

export const fetchMainPosts = async type => {
  try {
    const res = await fetch(`${api}${type}${json}`);
    const data = await res.json();
    const ids = await data.slice(0, 50);
    if (!ids) {
      throw new Error(`There was an error fetching the ${type} posts`);
    }
    const posts = Promise.all(ids.map(id => fetchItem(id))).then(items =>
      removeDeleted(onlyComments(removeDead(items)))
    );
    return posts;
  } catch (error) {
    return error.message;
  }
};
