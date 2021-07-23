import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  // populate the BrowseContainer with series and films data from firebase via useContent hook

  // series and films
  const { series } = useContent("series");
  const { films } = useContent("films");
  // slides
  const slides = selectionFilter({ series, films });

  // pass data to browse container
  return <BrowseContainer slides={slides} />;
}
