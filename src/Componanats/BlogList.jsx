import React from "react";
import BlogPost from "./BlogPost";

const BlogList = (props) => {
  const { posts } = props;

  return (
    <div className="text-center items-center justify-center flex flex-wrap">
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  ); 
};

export default BlogList;
