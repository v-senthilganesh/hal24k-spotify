import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Album from "./Album";
import Discover from "./Discover";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Discover />} />
      <Route path="album/:albumId" element={<Album />} />
    </ReactRoutes>
  );
};

export default Routes;
