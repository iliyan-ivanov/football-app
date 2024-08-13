const url = "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles";

export function getAllNews() {
  return fetch(`${url}.json`)
    .then((res) => res.json())
    .then((data) => {

      return Object.keys(data)
        .reverse()
        .reduce((acc, curr) => {
          acc.push({ ...data[curr], id: curr });
          return acc;
        }, []);
    })
    .catch((error) => console.log(error));
}

export function getOneNews(newsId) {
    return fetch(`${url}/${newsId}.json`)
              .then(res => res.json())
              .catch((error) => console.log(error));
}

export function createNews(category, title, description, imageURL, userId) {
    let news = {
        category,
        title,
        description,
        imageURL,
        date: new Date().toJSON().slice(0, 10),
        creator: userId
    }

    console.log(new Date().toJSON().slice(0, 10));

    return fetch(`${url}.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(news)
    })
    .catch((error) => console.log(error));
}

export function addComment(user, comment, newsId) {
    let commentData = {
      user,
      comment
    };

    return fetch(`${url}/${newsId}/comments.json`, {
        method: "POST",
        headers: {
          'Contet-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
    })
    .then(res => res.json())
    .catch((error) => console.log(error));
}