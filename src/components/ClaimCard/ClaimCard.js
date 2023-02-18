import React, { useState } from "react";
import { ethers } from "ethers";
import "./ClaimCard.css";

import WhitelistNFT from "../../data/WhitelistNFT";

import { Panel, Button, Div, CardGrid, Card, Group, } from "@vkontakte/vkui";

const ClaimCard = ({ address }) => {
  const onClaimHandler = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, WhitelistNFT.abi, signer);

    await contract.claimNFT();
    // Check success
  };

  return (
    <Card mode="shadow" className="mycard">
      <label>NFT Event Name</label>
      <label>Address</label>
      <Button onClick={onClaimHandler}>Claim</Button>
    </Card>
  );
};

export default ClaimCard;
