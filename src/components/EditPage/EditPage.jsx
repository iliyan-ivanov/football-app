import { useState } from "react";
import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
import "./EditPage.css";

const EditPage = () => {
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [imgErrorMessage, setImgErrorMessage] = useState("");

  return (
    <form className="create-form">
      <h1>Edit News</h1>
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
