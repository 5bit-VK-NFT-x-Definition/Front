import React, { useState } from "react";
import { ethers } from "ethers";
import "./ClaimCard.css";

import WhitelistNFT from "../../data/WhitelistNFT";

import { Button, Card } from "@vkontakte/vkui";

const ClaimCard = ({ event, index }) => {
  const onClaimHandler = async () => {};

  return (
    <Card mode="shadow" key={index}>
      <div
        style={{
          backgroundImage: `url(${event.img})`,
          backgroundSize: "cover",
          display: "flex",
          "flex-direction": "column",
          "justify-content": "space-between",
          "align-items": "flex-end",
          height: "150px",
          width: "340px",
        }}
      >
        <div className="topright">
          <label>{event.title}</label>
          <label> {event.description}</label>
        </div>
        <div className="bottomright">
          <Button onClick={onClaimHandler}>Claim</Button>
        </div>
      </div>
    </Card>
  );
};

export default ClaimCard;
