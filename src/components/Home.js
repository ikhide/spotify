import React from "react";
import { useState, useEffect } from "react";
import API from "../utilities/apiController";
import Category from "./category";
import Song from "../components/song";

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
      <div className="p-10 w-full">
        <div className="mb-10">
          <Category title="Released this week" />
          <div className="mt-8 flex">
            {releases &&
              releases.albums &&
              releases.albums.items &&
              releases.albums.items.map((data, i) => {
                return (
                  <Song key={i} src={data.images[0].url} title={data.name} />
                );
              })}
          </div>
        </div>
        <div className="mb-10">
          <Category title="Featured Playlist" />
          <div className="mt-8 flex">
            {featured &&
              featured.playlists &&
              featured.playlists.items &&
              featured.playlists.items.map((data) => {
                return <Song src={data.images[0].url} title={data.name} />;
              })}
          </div>
        </div>
        <div>
          <Category title="Browse" />
          <div className="mt-8 flex">
            {categories &&
              categories.categories &&
              categories.categories.items &&
              categories.categories.items.map((data) => {
                console.log(data);
                return <Song src={data.icons[0].url} title={data.name} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
