import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import { MusicNote } from "@mui/icons-material";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div className="sidenav">
      <h1 className="sidenav__logo">Saarthi</h1>

      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <MusicNote />
          <a href="https://open.spotify.com/playlist/2JNTQcXiuUxnlOu2fjr5Tr?si=6e4f7968552d4a60" className="ex-link" target="to_blank">Music</a>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <a href="https://youtube.com/playlist?list=PLu7fNwAmPQYq2qvECVXbnlVJtLHSKnkC9&feature=shared"className="ex-link"target="to_blank">Movies</a>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <a href="https://158sr.github.io/chatbox/" className="ex-link">Messages</a>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create Post</span>
        </button>
        <button className="sidenav__button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
          </span>
        </button>
            <button onClick={handelLogout} className="logout__button">
              Logout
            </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
