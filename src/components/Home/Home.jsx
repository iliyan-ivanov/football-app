import { useEffect, useState } from "react";
import MainNewsCard from "../common/MainNewsCard/MainNewsCard";
import SimpleNewsCard from "../common/SimpleNewsCard/SimpleNewsCard";
import { getAllNews } from "../../services/newsServices";
import "./Home.css";

const Home = () => {
  const [mainNews, setMainNews] = useState([]);
  const [simpleNews, setSimpleNews] = useState([]);

  useEffect(() => {
    getAllNews().then((res) => {
      setMainNews(res?.slice(0, 3));
      setSimpleNews(res?.slice(3, 19));
    });
  }, []);

  return (
    <main>
      <section className="home-main-news">
        {mainNews?.map((x) => (
          <MainNewsCard key={x.id} title={x.title} image={x.imageURL} id={x.id} />
        ))}
      </section>
      <section className="home-simple-news">
        {simpleNews?.map((x) => (
          <SimpleNewsCard key={x.id} title={x.title} image={x.imageURL} id={x.id} />
        ))}
      </section>
    </main>
  );
};

export default Home;
