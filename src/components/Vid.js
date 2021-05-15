import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Vid() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid container item xs={12} spacing={2}>
          <Grid item>
            {" "}
            <h1 className="flex justify-content-center align-items-center text-white text-5xl">
              welcome to my portfolio
            </h1>
          </Grid>
          <Grid item>
            {" "}
            <img
              src={urlFor(author.authorImage).url()}
              className="rounded-full w-52 h-52 lg:w-64 lg:h-64 mr-8 flex justify-content-center"
              alt={author.name}
            />
          </Grid>
          <Grid item>
            <p className="flex justify-content-center align-items-center text-white">
              I live and work, and study in Stockolm, Sweden. I am a custumer
              manager at a big gym called Friskis och Svettis. where i handle
              alot of diffrent people from all over the world. I also go to two
              diffrent school for the moment, i will however be done with my
              shorter studies as a Front End Developer in just under a month. At
              my other school i am currently studying to be a "dataingenjör" or
              data engineer at KTH.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
