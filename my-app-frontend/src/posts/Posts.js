import React, { useState, useEffect } from "react";
import Post from "./Post";


function Posts({
  posts,
  currentUser,
  onPostDelete,
}) {
    const [allPosts, setAllPosts] = useState(posts)

    useEffect(() => {
        fetch(`http://localhost:9292/posts`)
          .then((res) => res.json())
          .then((data) => setAllPosts(data)
        )
    }, []);

    function handlePostDelete(id) {}

    function handleUpdatePost(updatedPost) {
        const updatedPosts = allPosts.map((post) => {
            if (post.id === updatedPost.id) {
                return updatedPost;
            } else {
                return post;
            }
        });
        setAllPosts(updatedPosts);
    }


  return (
    <div className="list">
      <ul>
        {allPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            body={post.body}
            maker_id={post.maker_id}
            created_at={post.created_at}
            currentUser={currentUser}
            onPostDelete={handlePostDelete}
            onUpdatePost={handleUpdatePost}
          />
        ))}
      </ul>
    </div>
  );
}

export default Posts