import Header from "../components/header.jsx";
import SongRow from "../components/song-row.jsx";
import Navbar from "../components/navbar.jsx";
import AlbumRow from "../components/album-row.jsx";
import ArtistRow from "../components/artist-row.jsx";
import { Route, Routes } from "react-router-dom";

function Home() {
    return (
      <>
      <div className="pageLayout"> 
        <div className="banner">
          <Header /> 
          <div className="content"> 
            <SongRow/>
            <AlbumRow/>
            <ArtistRow/>
          </div>       
       </div>
       <Navbar />
      </div>
      </>
      
    );
  }
  
  export default Home;