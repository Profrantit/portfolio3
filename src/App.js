import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Fun from "./components/Fun";
import Test from "./components/Test";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer/index";
import Vid from "./components/Vid";
import NoteCard from "./components/NoteCard";

import Info from "./components/Info";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive
} from "./components/Info/Data";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/home" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
          <Route component={Landing} path="/" exact />
          <Route component={Fun} path="/fun" />
          <Route component={AboutPage} path="/aboutpage" />
          <Route component={Test} path="/test" />
          <Route component={HomePage} path="/homepage" />
          <Route component={Vid} path="/Vid" />
          <Route component={NoteCard} path="/NoteCard" />
          <AboutPage />
        </Switch>

        <Info {...homeObjOne} />
        <Info {...homeObjTwo} />
        <Info {...homeObjThree} />
        <Info {...homeObjFour} />
        <Info {...homeObjFive} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
