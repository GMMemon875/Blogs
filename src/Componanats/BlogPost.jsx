// BlogPost.js

import React from "react";

const BlogPost = (props) => {
  const { title, author, content } = props.post;

  return (
    <div className="text-center w-80 h-56 p-7 bg-gray-300 rounded-md mt-9 mr-4   ">
      <h2 className="text-center text-red-500 text-5xl ">{title}</h2>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
