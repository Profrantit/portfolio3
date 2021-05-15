/* import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import sanityClient from "../client";
import Grid from "@material-ui/core/Grid";

import video from "../videos/video-2.mp4";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundVideo: { video }
  }
}));

export default function Test() {
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
      <video
        src={video}
        alt="doggy"
        autoPlay
        loop
        muted
        className="absolute w-full"
        id="myVideo"
      />
      <Grid
        container
        border={1}
        justify="center"
        alignItems="center"
        className=""
      >
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-52 h-52 lg:w-64 lg:h-64 mr-8 flex justify-content-center"
            alt={author.name}
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "start" }}>
          <h1 className="text-white text-3xl">
            Hi! And Welcome To My Portfolio
          </h1>
        </Grid>
      </Grid>
    </main>
  );
}
 */
