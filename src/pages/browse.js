import React from "react";
import { useContent } from "../hooks";

export default function Browse() {
  // series and films
  const { series } = useContent("series");
  console.log("series");
  // slides
  // pass data to browse container
  return <p>Hello from browse</p>;
}
