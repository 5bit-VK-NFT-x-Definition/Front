import React, { useState } from "react";
import "./WalletConnect.css";

import { Button } from "@vkontakte/vkui";

const WalletConnect = () => {
  const [buttonText, setButtonText] = useState("Connect Wallet");

  const test = () => {
    console.log("test");
  };

  return <Button onClick={() => setButtonText("onClick")}>{buttonText}</Button>;
};

export default WalletConnect;
