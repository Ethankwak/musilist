"use client";
import React from "react";
import PropTypes from 'prop-types';

const SongItem = ({ song }) => {
  return (
    <div className="item">
      <img src={song.coverArt} alt={song.name} className="coverArt" />
      <div className="textArea">
        <p className="mainText">{song.name}</p>
        <p className="text">{song.artist}</p>
        <p className="seperator"> · </p>
        <p className="text3">{song.album}</p>
      </div>
    </div>
  );
};

SongItem.propTypes = {
  song: PropTypes.shape({
    coverArt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
  }).isRequired
};

export default SongItem;