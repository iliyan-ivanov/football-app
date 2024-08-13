import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { addComment, getOneNews } from "../../services/newsServices";
import AuthContext from "../../contexts/AuthContext";
import "./NewsDetails.css";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const { newsID } = useParams();
  const user = useContext(AuthContext);

  useEffect(() => {
    getOneNews(newsID)
      .then((data) => setNews(data))
      .catch((err) => console.log(err));
  }, []);

  const onAddComment = (e) => {
    e.preventDefault();

    const [ person, comment ] = e.target;

    if (comment.value == "" || person.value == "") {
      return;
    }

    addComment(person.value, comment.value, newsID).then((res) => {
      console.log(res);
      console.log("finished");
    });

    person.value = "";
    comment.value = "";
  };

  return (
    <main className="news-details-main">
      <h1>{news?.title}</h1>
      <section className="news-details-img">
        <img src={news?.imageURL} alt="Article picture" />
      </section>
      <section>
        <p>{news?.description}</p>
      </section>
      <section className="news-details-actions">
        <form onSubmit={onAddComment} className="news-details-form">
          <h4>Write your comment here:</h4>
          <input
            type="text"
            name="person"
            placeholder="Name"
            className="news-details-input-name"
          />
          <input
            type="text"
            name="comment"
            placeholder="Comment here..."
            className="news-details-comments-input"
          />
          <button type="submit">Add comment</button>
        </form>
        {!user ? (
          ""
        ) : news?.creator == user?.uid ? (
          <article className="news-details-btns">
            <button className="details-btn">Edit</button>
            <button className="details-btn">Delete</button>
          </article>
        ) : (
          <article className="news-details-btns">
            <button className="details-btn">Like</button>
            <button className="details-btn">Unlike</button>
          </article>
        )}
      </section>
    </main>
  );
};

export default NewsDetails;
