import React, { useEffect, useState } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import axios from "../../../axios";
import { useDispatch } from "react-redux";
import { GetNewReleases } from "../../../redux/slices/newReleasesSlice";

const Discover = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(GetNewReleases());
  // }, [dispatch]);

  useEffect(() => {
    axios
      .get("/browse/new-releases")
      .then((response) => setNewReleases(response.data.albums.items));
    axios
      .get("/browse/featured-playlists")
      .then((response) => setPlaylists(response.data.playlists.items));
    axios
      .get("/browse/categories?locale=EN")
      .then((response) => setCategories(response.data.categories.items));
  }, []);

  return (
    <div className="discover">
      <DiscoverBlock
        text="RELEASED THIS WEEK"
        id="released"
        data={newReleases}
      />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} />
    </div>
  );
};

export default Discover;
