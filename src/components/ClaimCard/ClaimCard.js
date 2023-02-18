import React, { useState } from "react";
import { ethers } from "ethers";
import "./ClaimCard.css";

import WhitelistNFT from "../../data/WhitelistNFT";

import { Button, Card } from "@vkontakte/vkui";

const ClaimCard = ({ address }) => {
  const onClaimHandler = async () => {};

  return (
    <Card mode="shadow">
      <div className="fathercard">
        <div className="topright">
          <label> NFT Event Name</label>
          <label> Address</label>
        </div>
        <div className="bottomright">
          <Button onClick={onClaimHandler}>Claim</Button>
        </div>
      </div>
    </Card>
  );
};

export default ClaimCard;
