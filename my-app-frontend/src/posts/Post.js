import React, { useState } from "react";
import EditPost from "./Post";


function Post({ id, title, image, body, maker_id, created_at, currentUser, onPostDelete, onUpdatePost }) {
    const [isEditing, setIsEditing] = useState(false);
    
    //const { id, title, image, body, maker_id, created_at: createdAt } = post;
    const timestamp = new Date(created_at).toLocaleTimeString();
    const isCurrentUser = currentUser.id === maker_id;
    const username = currentUser.username

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${id}`, {
          method: "DELETE",
        });
        onPostDelete(id);
    }

    function handleUpdatePost(updatedPost) {
        setIsEditing(false);
        onUpdatePost(updatedPost);
    }

    return (
    <div>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{body}</p>
        <li>
          <span className="user">{username}</span>
          <span className="time">{timestamp}</span>
          {isEditing ? (
            <EditPost
              id={id}
              title={title}
              image={image}
              body={body}
              onUpdatePost={handleUpdatePost}
            />
            ) : (
            <p>{body}</p>
            )}
          {isCurrentUser ? (
            <div className="actions">
              <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                <span role="img" aria-label="edit">✏️</span>
              </button>
              <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">🗑</span>
              </button>
            </div>
            ) : null}
        </li>
    </div>
    );
}



export default Post