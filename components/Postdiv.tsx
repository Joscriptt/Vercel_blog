import React from "react";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";

function Postdiv(post: Post) {
  return (
    <div>
      <Link
        href={post.url}
        className="hover:bg-neutral-950 p-2 hover:rounded-2xl"
      >
        <h1 className="font-InterBold text-2xl  text-neutral-300 my-2">
          {post.title}
        </h1>
        <div className="text-neutral-500 flex gap-x-3">
          <img
            className="w-7 h-7 rounded-full object-cover"
            src={post.image}
            alt=""
          />
          <p className="text-neutral-500 text-sm font-InterRegular">
            {format(parseISO(post.date), "LLLL d, yyyy")} • {post.author}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Postdiv;
