"use client";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlbumItem from "./album-item";
import { fetchPopularAlbums } from "../services/get-album";

const PopularAlbumsRow = () => {
  const [popularAlbums, setPopularAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const albums = await fetchPopularAlbums();
      setPopularAlbums(albums);
    };

    fetchData();
  }, []);

  const handleRedirect = () => {
   navigate.push("../pages/albums");
  };

  return (
    <div className="section">
      <h1>Top Albums</h1>
      <div className="row">
        {popularAlbums.map((album, index) => (
          <AlbumItem key={index} album={album} />
        ))}
      </div>

    </div>
  );
};

export default PopularAlbumsRow;