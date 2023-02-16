import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    slug: "nft-marketplace-in-react-js-next-typescript-full-guide",
    title: "NFT Marketplace in React, Typescript & Solidity - Full Guide",
    description: "Learn how to use React / Next JS, Solidity, and Pinata(IPFS) to create NFT marketplace on Ethereum. All In Typescript.",
    date: "2022-12-12",
    coverImage: "https://thrangra.sirv.com/Ethereum_blue_light-small.jpg",
  },
  {
    slug: "web-development-and-coding-full-course",
    title: "Web Development & Code 101 - Full Guide [2022]",
    description: "Learn programming in JS language, HTML, and CSS. Create a Web Application made in React JS. The path to the final project includes many assignments, code exercises, and challenges.",
    date: "2022-08-12",
    coverImage: "https://thrangra.sirv.com/Course_logo%20copy.jpg",
  },
  {
    slug: "rust-webassembly-with-js-ts-the-practical-guide",
    title: "Rust & WebAssembly with JS (TS) - The Practical Guide",
    description: "Learn how to code in Rust! Compile the code to WebAssembly, prepare JS/TS frontend and finish the course by creating the practical Snake game that can run in any browser.",
    date: "2022-04-12",
    coverImage: "https://thrangra.sirv.com/Rust_small.jpg",
  },
  {
    slug: "unity-2d-with-c-complete-game-dev-course",
    title: "Unity 2D With C# - Complete Game Dev Course",
    description: "Create the complete 2D survival game in Unity with C#. Learn best practices and patterns.",
    date: "2022-02-12",
    coverImage: "https://thrangra.sirv.com/Final_Unity_2D_Small.jpg",
  },
  {
    slug: "markdown-full-example",
    title: "Markdown Extensive Example",
    description: "Learn how to write markdown",
    date: "2022-01-12",
    coverImage: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=50",
  },
]

const BlogList = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {blogs.map((blog) => (
        <div key={blog.slug} className="group">
          <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
            <Link legacyBehavior href={`/blogs/${blog.slug}`}>
              <a>
                <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                  <Image
                    priority
                    layout="fill"
                    objectFit="cover"
                    src={blog.coverImage}
                    className="rounded-lg hover:cursor-pointer"
                    alt={""}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 font-bold">
                <span aria-hidden="true" className="inset-0" />
                  { blog.title }
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                { blog.description }
              </p>
            </div>
          </div>
          <Link
            legacyBehavior
            href={`/blogs/${blog.slug}`}>
            <a className="text-sm font-bold text-gray-700">
              Read More
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList;