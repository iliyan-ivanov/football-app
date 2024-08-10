const url = "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles.json";

export function getAllNews() {
  return fetch(url)
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

export function createNews(category, title, description, imageURL) {
    let news = {
        category,
        title,
        description,
        imageURL,
        date: new Date().toJSON().slice(0, 10)
    }

    console.log(new Date().toJSON().slice(0, 10));

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(news)
    })
}