import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@/app/Styles/UIGallery/LinksRevealCard.css"
const LinksRevealCard = () => {
  return (
    <div className="reveal-card">
      <div className="reveal-main">
        <div className="reveal-top"></div>
        <div className="reveal-left reveal-side"></div>
        <div className="reveal-right reveal-side"></div>
        <div className="reveal-title">Links</div>
        <div className="reveal-button-container">
          <button className="reveal-button">
            <LinkedInIcon className="reveal-icon" />
          </button>
          <button className="reveal-button">
            <GitHubIcon className="reveal-icon" />
          </button>
          <button className="reveal-button">
            <InstagramIcon className="reveal-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinksRevealCard;
