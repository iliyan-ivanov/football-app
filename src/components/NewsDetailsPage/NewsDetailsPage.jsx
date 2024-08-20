import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  addComment,
  getComments,
  getOneNews,
  likeNews,
  unlikeNews,
} from "../../services/newsServices";
import AuthContext from "../../contexts/AuthContext";
import "./NewsDetailsPage.css";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const [comments, setComments] = useState([]);
  const user = useContext(AuthContext);
  const { newsId } = useParams();

  useEffect(() => {
    getComments(newsId)
      .then((data) => setComments(data))
      .catch((err) => console.log(err));

    getOneNews(newsId)
      .then((data) => setNews(data))
      .catch((err) => console.log(err));
  }, []);

  function onAddComment(e) {
    e.preventDefault();

    const [person, comment] = e.target;

    if (comment.value == "" || person.value == "") {
      return;
    }

    addComment(person.value, comment.value, newsId).then((res) => {
      getComments(newsId)
        .then((data) => setComments(data))
        .catch((err) => console.log(err));
    });

    person.value = "";
    comment.value = "";
  }

  function onLike() {
    likeNews(newsId, user.uid, news.likes)
      .then(() => {
        getOneNews(newsId)
          .then((data) => setNews(data))
          .catch((err) => console.log(err));
    });
  }

  function onUnlike() {
    unlikeNews(newsId, user.uid, news.likes)
      .then(() => {
        getOneNews(newsId)
          .then((data) => setNews(data))
          .catch((err) => console.log(err));
  });
  }

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
        {!user ? (
          ""
        ) : news?.creator == user?.uid ? (
          <article className="news-details-btns">
            <button className="details-btn">Edit</button>
            <button className="details-btn">Delete</button>
          </article>
        ) : (
          <article className="news-details-btns">
            {news.likes?.includes(user.uid) ? (
              <button className="details-btn" onClick={onUnlike}>
                Unlike
              </button>
            ) : (
              <button className="details-btn" onClick={onLike}>
                Like
              </button>
            )}
            <p>Likes: {news.likes?.length || 0}</p>
          </article>
        )}
      </section>
      <section className="news-details-comments-section">
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

        {!comments ? (
          <h3>No comments...</h3>
        ) : (
          <article className="news-details-comments">
            <h3>Comments</h3>
            {comments?.map((comment) => (
              <article
                className="news-details-comment-container"
                key={comment.id}
              >
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
              </article>
            ))}
          </article>
        )}
      </section>
    </main>
  );
};

export default NewsDetails;
