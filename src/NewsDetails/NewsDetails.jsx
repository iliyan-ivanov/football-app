import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NewsDetails.css";
import { getOneNews } from "../services/newsServices";

const NewsDetails = () => {
    const [ news, setNews ] = useState({});
    const { newsID } = useParams();

    useEffect(() => {
        getOneNews(newsID)
          .then(data => setNews(data) )
          .catch(err => console.log(err))

    }, []);

    return (
        <main className="news-details-main">
            <h1>{news?.title}</h1>
            <section className="news-details-img">
                <img src={news?.imageURL} alt="Article picture" />
            </section>
            <section>
                <p>{news?.description}</p>
            </section>
        </main>
    )
}

export default NewsDetails;