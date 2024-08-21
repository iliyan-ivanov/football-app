import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
import AuthContext from "../../contexts/AuthContext";
import { editNews, getOneNews } from "../../services/newsServices";
import "./EditPage.css";

const EditPage = () => {
  const [news, setNews] = useState({});
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [imgErrorMessage, setImgErrorMessage] = useState("");

  const { newsId } = useParams();
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  useEffect(() => {
    getOneNews(newsId).then((data) => setNews(data));
  }, []);

  const onTitleHandler = (e) => {
    const title = e.target.value;

    setTitleErrorMessage("");

    if (title.length < 3) {
      setTitleErrorMessage("Title must be at least 6 characters!");
    }

    if (title.length < 1) {
      setTitleErrorMessage("Please insert title!");
    }

    if (title.length > 70) {
      setTitleErrorMessage("Title too long!");
    }
  };

  const onDescriptionHandler = (e) => {
    const description = e.target.value;

    setDescriptionErrorMessage("");

    if (description.length < 6) {
      setDescriptionErrorMessage("Description must be at least 6 characters!");
    }

    if (description.length < 1) {
      setDescriptionErrorMessage("Please insert Description!");
    }
  };

  const onImageHandler = (e) => {
    const imageUrl = e.target.value;

    setImgErrorMessage("");

    if (imageUrl.length < 10) {
      setImgErrorMessage("Image URL must be at least 6 characters!");
    }

    if (imageUrl.length < 1) {
      setImgErrorMessage("Please insert image URL!");
    }
  };

  const onEditHandler = (e) => {
    e.preventDefault();

    const { category, title, description, imageURL } = e.target;

    if (
      titleErrorMessage.length < 1 &&
      descriptionErrorMessage.length < 1 &&
      imgErrorMessage.length < 1 &&
      title.value != "" &&
      description.value != "" &&
      imageURL.value != "" &&
      category.value != "Select category" &&
      user.uid == news.creator
    ) {
      editNews(
        category.value,
        title.value,
        description.value,
        imageURL.value,
        newsId
      )
        .then(() => {
          navigate(`/${newsId}`);
        })
        .catch(() => {
          console.log("problem with creating");
        });
    }
  };

  return (
    <form className="create-form" onSubmit={onEditHandler}>
      <h1>Edit News</h1>
      <article className="create-content">
        <div className="create-content-category">
          <label htmlFor="category">Choose Category</label>
          <select className="create-category" type="text" name="category">
            <option value={news.category}>{news.category}</option>
            <option value="Select category">Select category</option>
            <option value="Europian Football">Europian Football</option>
            <option value="Bulgarian Football">Bulgarian Football</option>
            <option value="National Teams">National Teams</option>
          </select>
        </div>

        <div>
          <label htmlFor="title">News Title</label>
          <input
            type="text"
            className="create-title"
            id="title"
            placeholder="Title"
            name="title"
            defaultValue={news?.title}
            onBlur={onTitleHandler}
          />
          <ErrorDiv>{titleErrorMessage}</ErrorDiv>
        </div>

        <div>
          <label htmlFor="imageURL">Image url</label>
          <input
            type="text"
            className="create-img"
            id="imageURL"
            placeholder="Image Url"
            name="imageURL"
            defaultValue={news?.imageURL}
            onBlur={onImageHandler}
          />
          <ErrorDiv>{imgErrorMessage}</ErrorDiv>
        </div>

        <div>
          <label htmlFor="description">News Description</label>
          <textarea
            className="create-description"
            id="description"
            placeholder="Description..."
            name="description"
            defaultValue={news?.description}
            onBlur={onDescriptionHandler}
          ></textarea>
          <ErrorDiv>{descriptionErrorMessage}</ErrorDiv>
        </div>
      </article>
      <button type="submit" className="form-btn">
        Edit
      </button>
    </form>
  );
};

export default EditPage;
