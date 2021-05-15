import React, { useState, useEffect } from "react";
import image from "../code.jpg";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage":image.asset->url
    }`
      )
      .then(data => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) return <div>loading...</div>;
  return (
    <main>
      <img
        src={image}
        alt="coding"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-6  lg:pt-6 px-8">
        <h1 className="text-6xl text-black font bold cursive leading-none lg:leading-snug home-name hover:text-red-400">
          <span className="text-6xl text-white font bold cursive leading-none lg:leading-snug home-name hover:text-red-400">
            <Link to="/projects">Tjena!</Link>
          </span>
          <span className="text-1xl text-white font bold cursive leading-none lg:leading-snug home-name hover:text-red-400">
            {" "}
            <Link to="/projects">Jag</Link>{" "}
          </span>{" "}
          <span className="text-6xl text-white font bold cursive leading-none lg:leading-snug home-name hover:text-red-400">
            {" "}
            <Link to="/projects">är</Link>{" "}
          </span>{" "}
          <span className="text-6xl text-white font bold cursive leading-none lg:leading-snug home-name hover:text-red-400">
            {" "}
            <Link to="/projects">Axel</Link>
          </span>
        </h1>
        <div className="flex justify-content-center align-items-center">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-52 h-52 lg:w-64 lg:h-64 mr-8 flex justify-content-center"
            alt={author.name}
          />
        </div>
      </section>
    </main>
  );
}
