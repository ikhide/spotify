import React from "react";
import NavLinks from "../components/NavLinks";
import Profile from "../components/profile";
import {
  MusicIcon,
  SearchIcon,
  FavoriteIcon,
  PlaylistIcon,
  ChartsIcon,
} from "../components/icons";

const Navbar = () => {
  return (
    <nav
      className="text-white min-h-screen shadow-sm font-mono lg:w-64 md:w-64 w-16"
      role="navigation"
    >
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="md:block">
        <Profile text="test@test.com" src="avatar.png" />
        <NavLinks icon={<MusicIcon />} text="Discover" />
        <NavLinks icon={<SearchIcon />} text="Search" />
        <NavLinks icon={<FavoriteIcon />} text="Favorites" />
        <NavLinks icon={<PlaylistIcon />} text="Playlist" />
        <NavLinks icon={<ChartsIcon />} text="Charts" />
      </div>
    </nav>
  );
};

export default Navbar;
