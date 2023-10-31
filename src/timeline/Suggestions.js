import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import NewsCard from "./newsCard/NewsCard";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">News Suggestions for you</div>
      <div className="suggestions__usernames">
            <NewsCard />
      </div>
    </div>
  );
}

export default Suggestions;
