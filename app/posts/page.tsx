"use client";

import Header from "@/components/Header";
import React from "react";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Next.js App Dir Blog",
};

function Postdiv(post: Post) {
  return (
    <>
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
    </>
  );
}

function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-full flex justify-center">
      <div className=" w-full h-full flex flex-col ">
        <Header />

        <div className="lg:max-w-[73.7rem] mx-auto">
          <div className="mt-14 text-white">
            <nav className="flex justify-between items-center py-4  ">
              <div className="lg:flex hidden space-x-4 ">
                <Link
                  className="text-neutral-600 text-sm hover:text-white"
                  href="#"
                >
                  All Posts
                </Link>
                <Link
                  className="text-white border-b-2 text-sm border-white"
                  href="#"
                >
                  Engineering
                </Link>
                <Link
                  className="text-neutral-600 text-sm hover:text-white"
                  href="#"
                >
                  Community
                </Link>
                <Link
                  className="text-neutral-600 text-sm hover:text-white"
                  href="#"
                >
                  Company News
                </Link>
                <Link
                  className="text-neutral-600 text-sm hover:text-white"
                  href="#"
                >
                  Customer Stories
                </Link>
                <Link
                  className="text-neutral-600 text-sm hover:text-white"
                  href="#"
                >
                  Changelog
                </Link>
                <Link
                  className="text-neutral-600 text-sm hover:text-white"
                  href="#"
                >
                  Press
                </Link>
              </div>
            </nav>
            <header className=" py-12 pl-5 lg:pl-0">
              <h1 className="text-4xl font-InterBold">Engineering</h1>
            </header>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 px-3 mt-10">
            {posts.map(
              (post, i) =>
                i < 5 && (
                  <div
                    key={i}
                    className={`rounded-xl border border-neutral-800 bg-neutral-900  relative  overflow-hidden
                    ${i === 0 && "md:row-span-2 row-start-1 "}
                    ${i === 2 && "lg:h-80 h-64 "}
                    ${i === 1 && "lg:h-[280px] h-64 "}
                    ${i === 3 && "lg:h-[330px] h-64 lg:-mt-9 "}
                    ${i === 4 && "h-72"}
                    `}
                  >
                    <Link href={post.url}>
                      <img
                        className="h-full  w-full object-cover"
                        src={post.image}
                        alt=""
                      />

                      <p className="text-neutral-50 bottom-14 font-InterBold text-xl ml-2  absolute z-20 ">
                        {post.title}
                      </p>

                      <div className="absolute bottom-3 z-20 flex justify-between items-center w-full px-2 font-InterMedium text-neutral-500 text-sm">
                        <div className="flex items-center gap-x-2">
                          <img
                            className="w-6 h-6 rounded-full object-cover"
                            // src="images/img3.jpg"
                            src={post.Author_image}
                            alt=""
                          />
                          <p>{post.author}</p>
                        </div>
                        <p>{format(parseISO(post.date), "LLLL d, yyyy")}</p>
                      </div>
                    </Link>
                    <div className=" bg-gradient-to-t  w-full absolute z-10  from-[#000000] via-black/80  to-transparent bottom-0   h-44 transition-all ease-in duration-200" />
                  </div>
                )
            )}
          </div>

          <div className="mt-20 pl-5">
            <h1 className="font-InterBold text-[2.5rem] text-neutral-200">
              Latest
            </h1>
          </div>

          <div className="mt-6 grid lg:grid-cols-2 lg:gap-11 p-3 gap-7  w-full">
            {posts.map((post, idx) => (
              <Postdiv key={idx} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
