const url = "https://football-site-13535-default-rtdb.europe-west1.firebasedatabase.app/articles.json";

export function getAllNews() {
    let allNews;

     return fetch(url)
      .then(res => res.json())
      .then( data => {
        return Object.keys(data).reduce((acc, curr) => {
            acc.push({ ...data[curr], "id": curr })
            return acc
          }, []);

      })
      .catch(error => console.log(error));

      
  }