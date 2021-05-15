/* import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import sanityClient from "../client";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import video from "../videos/video-2.mp4";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
export default function HomePage() {
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
    <main className="bg-gray">
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
        <Grid item xm={12}>
          <h1 className="text-5xl text-white">
            Hi! And Welcome To My Portfolio
          </h1>
        </Grid>
        <Grid item xm={12}>
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-52 h-52 lg:w-64 lg:h-64 mr-8 flex justify-content-center"
            alt={author.name}
          />
        </Grid>
        <Grid item xm={12}>
          <p className="text-2xl text-white">
            I live and work, and study in Stockolm, Sweden. I am a custumer
            manager at a big gym called Friskis och Svettis. where i handle alot
            of diffrent people from all over the world. I also go to two
            diffrent school for the moment, i will however be done with my
            shorter studies as a Front End Developer in just under a month. At
            my other school i am currently studying to be a "dataingenjör" or
            data engineer at KTH.
          </p>
        </Grid>
      </Grid>
    </main>
  );
}
 */
