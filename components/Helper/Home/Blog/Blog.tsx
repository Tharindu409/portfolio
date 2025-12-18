import React from "react";
import BlogCard from "./BlogCard";
import { section } from "framer-motion/client";

const blogPosts = [
  {
    image: "/images/b1.jpg",
    title: "Learning how to build an amazing portfolio website using Next.js",
    tags: ["React", "Next.js", "Tailwind"],
  } 
];

const Blog = () => {
  
  return (
    <section id="blog">
    
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest <span className="text-cyan-200">Blogs</span>
      </h1>

      <div  data-aos="fade-right" 
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
        {blogPosts.map((post, index,i) => (
          <BlogCard
            key={index}
            image={post.image}
            title={post.title}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
    </section>
   );
   
};

export default Blog;
