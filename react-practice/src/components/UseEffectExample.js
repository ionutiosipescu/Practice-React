import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectExample = () => {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState();

  const getPosts = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(posts);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            title: {post.title}
            <div>body: {post.body}</div>
            <hr />
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};
export default UseEffectExample;
