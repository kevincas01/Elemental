import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../styles/LinksRevealCard.css";
const LinksRevealCard = () => {
  return (
    <div className="card">
      <div className="main">
        <div className="top"></div>
        <div className="left side"></div>
        <div className="right side"></div>
        <div className="title">Links</div>
        <div className="button-container">
          <button className="button">
            <LinkedInIcon className="icon" />
          </button>
          <button className="button">
            <GitHubIcon className="icon" />
          </button>
          <button className="button">
            <InstagramIcon className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinksRevealCard;
