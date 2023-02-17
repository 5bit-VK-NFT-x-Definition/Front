import React, { useState } from "react";
import { ethers } from "ethers";
import "./WalletConnect.css";

import { Button } from "@vkontakte/vkui";

const WalletConnect = () => {
  const [buttonText, setButtonText] = useState("Connect");

  const test = () => {
    console.log("test");
  };

  return (
    <Button mode="primary" onClick={() => setButtonText("123")}>
      {buttonText}
    </Button>
  );
};

export default WalletConnect;
