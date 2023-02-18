import React, { useState } from "react";
import { ethers } from "ethers";
import "./WatchCard.css";

import { Panel, Button, Div, CardGrid, Card, Group } from "@vkontakte/vkui";

const WatchCard = ({ event }) => {
  const onWatchHandler = async () => {
    // Check success
  };

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
          <Button onClick={onWatchHandler}>Claim</Button>
        </div>
      </div>
    </Card>
  );
};

export default WatchCard;
