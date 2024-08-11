import { useState } from "react";
import { createNews } from "../../services/newsServices";
import { useNavigate } from "react-router-dom";
import ErrorDiv from "../common/ErrorDiv/ErrorDiv"
import "./Create.css";

const Create = () => {
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [imgErrorMessage, setImgErrorMessage] = useState("");

  const navigate = useNavigate();

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

  const onCreateHandler = (e) => {
    e.preventDefault();

    const { category, title, description, imageURL } = e.target;

    if (
      titleErrorMessage.length < 1 &&
      descriptionErrorMessage.length < 1 &&
      imgErrorMessage.length < 1 &&
      title.value != "" &&
      description.value != "" &&
      imageURL.value != "" &&
      category.value != "Select category"
    ) {
        createNews(category.value, title.value, description.value, imageURL.value)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log("problem with creating");
        });

      title.value = "";
      description.value = "";
      imageURL.value = "";
      category.value = "Select Category";
    }
  };

  return (
    <form className="create-form" onSubmit={onCreateHandler}>
      <h1>Create News</h1>
      <article className="create-content">
        <div className="create-content-category">
          <label htmlFor="category">Choose Category</label>
          <select className="create-category" type="text" name="category">
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
            onBlur={onDescriptionHandler}
          ></textarea>
          <ErrorDiv>{descriptionErrorMessage}</ErrorDiv>
        </div>
      </article>
      <button type="submit" className="form-btn">
        Submit
      </button>
    </form>
  );
};

export default Create;
