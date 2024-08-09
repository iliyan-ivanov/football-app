const url = "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles.json";

export function getAllNews(category) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {

      if (category) {
        return Object.keys(data)
          .reverse()
          .reduce((acc, curr) => {
            if (data[curr].category == category) {
              acc.push({ ...data[curr], id: curr });
            }

            return acc;
          }, []);
      }

      return Object.keys(data)
        .reverse()
        .reduce((acc, curr) => {
          acc.push({ ...data[curr], id: curr });
          return acc;
        }, []);
    })
    .catch((error) => console.log(error));
}
