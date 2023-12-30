import Header from "@/components/Header";
import PostNotFound from "@/components/PostNotFound";
import MDXComponents from "@/utils/mdxcomponents";
import { Post, allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
// import Image from "next/image";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () =>
  allPosts.map((post: Post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: Props): Metadata => {
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, description: post?.description };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug
  );

  // console.log(post.tags[0]);

  let MDXContent;

  if (!post) {
    return <PostNotFound />;
  } else {
    MDXContent = getMDXComponent(post!.body.code);
  }

  const color1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  const color2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  // Define the inline style with the gradient
  const gradientStyle = {
    // background: `linear-gradient(to bottom, ${color1}, ${color2}, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))`,
    background: `linear-gradient(to bottom, ${color1}, ${color2}, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.5))`,
    // width: "100%",
    height: "100vh",
    position: "absolute",
    width: "100%",
    zindex: "1",
  };
  const gradientStyletag = {
    // background: `linear-gradient(to bottom, ${color1}, ${color2}, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))`,
    background: `linear-gradient(to bottom,${color2}, ${color1} )`,
  };

  return (
    <div className=" ">
      <div className=" w-full h-fit flex flex-col pb-32 ">
        <Header />

        <div style={gradientStyle} className="opacity-30" />

        <div className="  flex flex-col items-center relative z-10 mt-28 ">
          <div className="max-w-7xl mx-auto lg:px-20 md:px-11 px-8">
            <Link
              href={"/posts"}
              className=" relative my-6 text-neutral-200 bottom-5"
            >
              <span className="mt-24">Back to blog</span>
            </Link>
            <div className="flex gap-x-10">
              <div
                style={gradientStyletag}
                className="w-fit px-3 h-7 rounded-2xl"
              >
                <span className="text-neutral-100 font-InterRegular text-sm">
                  {post.tags[0]}
                </span>
              </div>
              <p className="text-neutral-200 text-sm">
                {format(parseISO(post.date), "EEEE, MMMM do yyyy")}
              </p>
            </div>

            <h1 className=" md:text-5xl/snug text-4xl/snug font-bold max-w-3xl my-8">
              {post.title}
            </h1>

            <p className="text-2xl text-neutral-500 font-InterMedium max-w-3xl">
              {post.description}
            </p>
            <div className="flex flex-col md:flex-row  gap-10 order-2">
              <div className="h-screen w-10 bg-red-300" />
              <article className="col-span-4  ">
                <MDXContent components={{ ...MDXComponents }} />
              </article>
              <div className="col-span-1 w-full order-1 ">
                <p className="text-neutral-400 text-sm font-InterRegular">
                  Posted by
                </p>
                <div className="flex items-center gap-x-4 mt-5 w-full">
                  <div className="w-16">
                    <img
                      // width={36}
                      // height={36}
                      className="w-9  h-9 object-cover rounded-full"
                      src={post.Author_image}
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-neutral-100 text-sm font-InterMedium">
                      {post.author}
                    </p>
                    <h2 className="text-neutral-400 text-sm font-InterRegular">
                      {post.author_Title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
