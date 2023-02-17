import React, { useState } from "react";
import "./WalletConnect.css";

import { Button } from "@vkontakte/vkui";

const WalletConnect = () => {
  const [buttonText, setButtonText] = useState("Connect");

  const test = () => {
    console.log("test");
  };

  return <button onClick={() => setButtonText("onClick")}>{buttonText}</button>;
};

export default WalletConnect;
