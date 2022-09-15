import React, { useState } from "react";

function EditPost({ id, title, image, body, onUpdatePost }) {
    const [postBody, setPostBody] = useState(body);
    const [postTitle, setPostTitle] = useState(title);
    const [postImage, setPostImage] = useState(image);

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/posts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            image: postImage,
            body: postBody,
          }),
        })
        .then((resp) => resp.json())
        .then((updatedPost) => onUpdatePost(updatedPost));
    }

    return (
        <form className="edit-post" onSubmit={handleFormSubmit}>
            <input type="text" name="title" placeholder="Title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
            <input type="text" name="image" placeholder="Image URL" value={postImage} onChange={(e) => setPostImage(e.target.value)} />
            <input type="text" name="body" placeholder="Explain your design" value={postBody} onChange={(e) => setPostBody(e.target.value)} />
            <input type="submit" value="Save" />
        </form>
    );


}

export default EditPost