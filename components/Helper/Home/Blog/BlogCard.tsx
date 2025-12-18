import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  tags: string[];
};

const BlogCard = ({ image, title, tags }: Props) => {
  return (
    <div className="bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt="Blog Image"
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <p className="text-gray-400 text-sm">Dec 12, 2025</p>
        <h2 className="text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 transition-all duration-300">
          {title}
        </h2>

        {/* Dynamic Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-blue-950 text-white text-sm sm:text-base font-bold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
