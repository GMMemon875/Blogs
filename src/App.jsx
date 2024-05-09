import React from "react";
import BlogList from "./Componanats/BlogList";

const BlogDisplay = () => {
  // Dummy blog data
  const posts = [
    {
      title: "First Post",
      author: "John Doe",
      content: "This is the content of the first post.",
    },
    {
      title: "Second Post",
      author: "Jane Smith",
      content: "This is the content of the second post.",
    },
    {
      title: "Third Post",
      author: "G M Memon",
      content: "This is the content of the second post.",
    },
    {
      title: "Fourth Post",
      author: "XYZ Smith",
      content: "This is the content of the second post.",
    },
    {
      title: "Fifth Post",
      author: "Imtiaz Smith",
      content: "This is the content of the second post.",
    },
    {
      title: "Six Post",
      author: "Jon Smith",
      content: "This is the content of the second post.",
    },
    {
      title: "Seventh Post",
      author: "Jon Cena",
      content: "This is the content of the second post.",
    },
  ];

  return (
    <div className="blog-display bg-gray-500 ">
      <h1 className="text-8xl font-bold text-center">My Blog</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default BlogDisplay;
