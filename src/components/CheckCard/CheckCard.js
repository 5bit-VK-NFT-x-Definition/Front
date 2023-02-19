import React, { useState } from "react";
import { ethers } from "ethers";
import "./CheckCard.css";

import { Button, Card } from "@vkontakte/vkui";

const CheckCard = ({ event, index }) => {
  const [loading, setLoading] = useState(false);

  const onCheckHandler = async () => {
    setLoading(true);
    try {
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
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
          <Button onClick={onCheckHandler} loading={loading}>
            Проверить
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CheckCard;
