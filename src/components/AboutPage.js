import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import video from "../videos/video-2.mp4";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function AboutPage() {
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
    <main className="hero-container">
      <video
        src={video}
        alt="doggy"
        autoPlay
        loop
        muted
        className="absolute w-full"
        id="myVideo"
      />

      <Grid container direction="column" justify="center" alignItems="center">
        {" "}
        <Grid item xs={4} alignItems="center">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8 flex"
            alt={author.name}
          />
        </Grid>
        <Grid item xs={4}>
          <h1 className="cursive text-6xl text-white mb-4">
            Hey there. I'm <span className="cursive">{author.name}</span>
          </h1>
          <Divider />
        </Grid>
        <Grid item xs={4} md={6} lg={12}>
          <Typography
            variant="body1"
            fontWeight={500}
            className="prose text-2xl lg:prose-xl bread"
          >
            <BlockContent
              fontWeight={500}
              blocks={author.bio}
              projectId="pclgieqh"
              dataset="production"
            />
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
}
