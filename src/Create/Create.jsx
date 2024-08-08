import './Create.css';

const Create = () => {

    return (
        <form className="create-form">
            <h1>Create News</h1>
            <article className="create-content">
                <div className='create-content-category'>
                    <label htmlFor="category">Choose Category</label>
                    <select className="create-category" type="text" name="category">
                        <option value="Europian Football">Select category</option>
                        <option value="Europian Football">Europian Football</option>
                        <option value="Bulgarian Football">Bulgarian Football</option>
                        <option value="National Teams">National Teams</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="title">News Title</label>
                    <input type="text" className="create-title" id="title" placeholder="Title" name="title" />
                    
                </div>

                <div>
                    <label htmlFor="imageURL">Image url</label>
                    <input type="text" className="create-img" id="imageURL" placeholder="Image Url" name="imageURL" />
                    
                </div>

                <div>
                    <label htmlFor="description">News Description</label>
                    <textarea className="create-description" id="description" placeholder="Description..." name="description"></textarea>
                    
                </div>

            </article>
            <button type="submit" className="form-btn">Submit</button>
        </form>
    );
}

export default Create;