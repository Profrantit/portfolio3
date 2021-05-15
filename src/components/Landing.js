import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Grid, Typography } from "@material-ui/core";
import video from "../videos/video-2.mp4";
import image from "../images/image-cat.png";
import Image2 from "../images/firebase2.svg";
import ReactImg from "../images/react.svg";
import Image3 from "../images/nodejs-logo.svg";
import Image4 from "../images/angular.svg";

export default function Landing() {
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
          <Typography
            className="cursive"
            color="white"
            variant="h4"
            align="center"
          >
            <h1 className="cursive pt-10">Hi! And Welcome To My Portfolio</h1>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src={image}
            className="w-52 h-52 lg:w-64 lg:h-64  flex justify-content-center"
            alt="cat-logo"
          />
        </Grid>
        <Grid item>
          {" "}
          <Typography align="center" color="white" xs={12} md={6} lg={4}>
            {" "}
            HTML, CSS, JAVASCRIPT
          </Typography>
          <Typography align="center" color="white" xs={12} md={6} lg={4}>
            {" "}
            NEXT.JS, FIREBASE, SANITY
          </Typography>
          <Typography align="center" color="white" xs={12} md={6} lg={4}>
            {" "}
            REACT, VUE, JS
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img src={Image2} class="w3-round" alt="Norway"></img>
        </Grid>
        <Grid item xs={3}>
          <img src={ReactImg} class="w3-round" alt="react-logo"></img>
        </Grid>
        <Grid item xs={3}>
          <img src={Image3} class="w3-round" alt="react-logo"></img>
        </Grid>
        <Grid item xs={3}>
          <img src={Image4} class="w3-round" alt="react-logo"></img>
        </Grid>
      </Grid>
    </div>
  );
}
