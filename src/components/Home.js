import React from "react";
import { useState, useEffect } from "react";
import API from "../utilities/apiController";

export default function Home() {
  const [token, setToken] = useState();
  const [releases, setReleases] = useState();
  const [featured, setFeatured] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    if (!token)
      API.fetchToken().then((token) => {
        setToken(token);
      });

    if (token) {
      API._getNewReleases(token).then((releases) => {
        setReleases(releases);
      });
      API._getCategories(token).then((category) => {
        setCategories(category);
      });

      API._getFeaturedPlaylists(token).then((featured) => {
        console.log(featured);
        setFeatured(featured);
      });
    }
  }, [token]);

  return (
    <div>
      <span>New Realeases</span>
      <br />
      {releases &&
        releases.albums &&
        releases.albums.items &&
        releases.albums.items.map((data) => {
          return <span>{data.name}</span>;
        })}
      <br />
      <span>FEATURED</span>
      <br />
      {featured &&
        featured.playlists &&
        featured.playlists.items &&
        featured.playlists.items.map((data) => {
          return <span>{data.name}</span>;
        })}
      <br />
      <span>CATEGORIES</span>
      <br />
      {categories &&
        categories.categories &&
        categories.categories.items &&
        categories.categories.items.map((data) => {
          return <span>{data.name}</span>;
        })}
    </div>
  );
}
