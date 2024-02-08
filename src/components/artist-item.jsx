"use client";
import React from "react";
import PropTypes from 'prop-types';

const ArtistItem = ({ artist }) => {
  return (
    <div className="item">
      <img src={artist.profilePicture} alt={artist.artist} className="profilePicture" />
      <div className="textArea">
        <p className="artistName">{artist.artist}</p>
      </div>
    </div>
  );
};

ArtistItem.propTypes = {
  artist: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  
  }).isRequired
};

export default ArtistItem;