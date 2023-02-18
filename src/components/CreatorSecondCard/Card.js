import React, { useState } from "react";
import { ethers } from "ethers";

import { Panel, Button, Div, CardGrid, Card, Group } from "@vkontakte/vkui";

const CardLib= () => {
  const onCheckHandler = async () => {
    // Check success
  };

  return (
    <Card mode="shadow" className="card">
      <label> NFT Event Name</label>
      <br />
      <label>Address</label>
      <br />
      <Button className="add">Check</Button>
    </Card>
  );
};

export default CardLib;