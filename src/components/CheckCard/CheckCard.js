import React, { useState } from "react";
import { ethers } from "ethers";

import { Button, Card } from "@vkontakte/vkui";

const CheckCard = () => {
  const onCheckHandler = async () => {
    // Check success
  };

  return (
    <Card mode="shadow" className="mycard">
      <label> NFT Event Name</label>
      <br />
      <label>Address</label>
      <br />
      <Button className="add">Check</Button>
    </Card>
  );
};

export default CheckCard;
