import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import { Grid, Typography } from "@material-ui/core";

import video from "../videos/video-2.mp4";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function NoteCard() {
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
    <div>
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
        <Grid item xs={12} sm={6} md={3}>
          <Typography color="white" variant="h4">
            Hi and Welcome to my portfolio
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-52 h-52 lg:w-64 lg:h-64 mr-8 flex justify-content-center"
            alt={author.name}
          />
        </Grid>
        <Grid item>
          <Typography variant="paragraph">
            {" "}
            I live and work, and study in Stockolm, Sweden. I am a custumer
            manager at a big gym called Friskis och Svettis. where i handle alot
            of diffrent people from all over the world. I also go to two
            diffrent school for the moment, i will however be done with my
            shorter studies as a Front End Developer in just under a month. At
            my other school i am currently studying to be a "dataingenjör" or
            data engineer at KTH.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
