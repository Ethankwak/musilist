"use client";
import React from "react";
import PropTypes from 'prop-types';

const AlbumItem = ({ album }) => {
  return (
    <div className="item">
      <img src={album.coverArt} alt={album.name} className="coverArt" />
      <div className="textArea">
        <p className="mainText">{album.name}</p>
        <p className="text">{album.artist}</p>
        <p className="seperator"> · </p>
        <p className="text3">{album.date}</p>
      </div>
    </div>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.shape({
    coverArt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default AlbumItem;
