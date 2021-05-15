import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { AiOutlineArrowRight } from "react-icons/ai";
import video from "../videos/video-2.mp4";
import { Grid, Typography } from "@material-ui/core";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  const theme = createMuiTheme({
    typography: {
      subtitle1: {
        fontSize: 12
      },
      h2: {
        fontWeight: 700
      }
    }
  });
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags,
    } `
      )
      .then(data => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="min-h-screen p-12">
      <video
        src={video}
        alt="doggy"
        autoPlay
        loop
        muted
        className="absolute w-full"
        id="myVideo"
      />
      <ThemeProvider theme={theme}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography xs={4} variant="h2" className="cursive">
              My Projects
            </Typography>
          </Grid>
          <Grid item>
            <Typography xs={4} className="cursive" variant="h3">
              Welcome To My
            </Typography>
          </Grid>
          <Grid item>
            <Typography xs={4} className="cursive" variant="h3">
              Projects Page!
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography xs={4} className="cursive" variant="h3">
            {projectData &&
              projectData.map((project, index) => (
                <article
                  border={1}
                  className="rounded overflow-hidden shadow-lg p-16"
                >
                  <h3 className="font-bold text-xl mb-2 ">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <strong className="font-bold">Company</strong>:{" "}
                      {project.place}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <strong className="font-bold">Type</strong>:{""}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-white leading-relaxed">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-white font-bold hover:underline hover:text-red-400 text-xl"
                    >
                      <span role="img" aria-label="right pointer">
                        View The Project <AiOutlineArrowRight />
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </Typography>
        </Grid>
      </Grid>
    </main>
  );
}
