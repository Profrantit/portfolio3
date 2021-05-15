import React from "react";
import Hero from "./Hero";
import NavBar from "./NavBar";
import { SliderData } from "../data/SliderData";
import { Button } from "./Button";
function Fun() {
  return (
    <div>
      <NavBar />
      <Hero slides={SliderData} />
      <Button />
    </div>
  );
}

export default Fun;
