import config from "./config";

const APIController = {
  fetchToken: async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(config.id + ":" + config.secrete),
      },
      body: "grant_type=client_credentials",
    });
    const data = await result.json();
    return data.access_token;
  },

  _getCategories: async (token) => {
    const result = await fetch("https://api.spotify.com/v1/browse/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });
    const data = await result.json();
    return data;
  },
  _getNewReleases: async (token) => {
    const result = await fetch(
      "https://api.spotify.com/v1/browse/new-releases",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await result.json();
    return data;
  },
  _getFeaturedPlaylists: async (token) => {
    const result = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await result.json();
    return data;
  },
};

export default APIController;
