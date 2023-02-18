import React, { useState } from "react";
import { ethers } from "ethers";
import "./CheckCard.css";

import { Button, Card } from "@vkontakte/vkui";

const CheckCard = () => {
  const onCheckHandler = async () => {
    // Check success
  };

  return (
    <Card mode="shadow">
      <div className="fathercard">
        <div className="topright">
          <label> NFT Event Name</label>
          <label> Address</label>
        </div>
        <div className="bottomright">
          <Button onClick={onCheckHandler}>Claim</Button>
        </div>
      </div>
    </Card>
  );
};

export default CheckCard;
