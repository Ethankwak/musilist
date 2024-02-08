"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtistItem from "./artist-item";
import { fetchPopularArtists } from "../services/get-artist";

const PopularArtistsRow = () => {
  const [popularArtists, setPopularArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const artists = await fetchPopularArtists();
      setPopularArtists(artists);
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
    navigate.push("../pages/artists");
  };

  return (
    <div className="section">
      <h1>Top Artists</h1>
      <div className="row">
        {popularArtists.map((artist, index) => (
          <ArtistItem key={index} artist={artist} />
        ))}
      </div>

    </div>
  );
};

export default PopularArtistsRow;