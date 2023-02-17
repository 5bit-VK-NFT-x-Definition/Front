import React from "react";
import "./CustomPanelHeader.css";

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
} from "@vkontakte/vkui";
import WalletConnect from "../WalletConnect/WalletConnect";

const CustomPanelHeader = () => {
  return (
    <PanelHeader>
      <div className="headerContainer">
        <label>Home</label>
        <WalletConnect />
      </div>
    </PanelHeader>
  );
};

export default CustomPanelHeader;
