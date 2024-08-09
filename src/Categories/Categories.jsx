import { useEffect, useState } from "react";
import MainNewsCard from "../common/MainNewsCard/MainNewsCard";
import SimpleNewsCard from "../common/SimpleNewsCard/SimpleNewsCard";
import { getAllNews } from "../services/newsServices";
import "./Categories.css";

const Categories = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getAllNews().then((res) => {
      setNews(res);
    });
  }, []);

  return (
    <main className="categories-main">
      <h1 className="categories-heading">{props.category}</h1>
      <section className="categoeries-main-news">
        {news
          .filter((x) => x.category == props.category)
          .slice(0, 3)
          .map((x) => (
            <MainNewsCard
              key={x.id}
              title={x.title}
              image={x.imageURL}
              id={x.id}
            />
          ))}
      </section>
      <section className="categoeries-simple-news">
        {news
          .filter((x) => x.category == props.category)
          .slice(3)
          .map((x) => (
            <SimpleNewsCard
              key={x.id}
              title={x.title}
              image={x.imageURL}
              id={x.id}
            />
          ))}
      </section>
    </main>
  );
};

export default Categories;
