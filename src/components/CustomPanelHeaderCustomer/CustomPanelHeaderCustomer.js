import React from "react";
import "./CustomPanelHeaderCustomer.css";

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  PanelHeaderBack,
} from "@vkontakte/vkui";

import WalletConnect from "../WalletConnect/WalletConnect";

const CustomPanelHeaderCustomer = ({ id, go}) => {
  return (
    <panel id="Customer">       
    <PanelHeader>
      <div className="headerContainer">
        <label>VK NFT-билеты Definition</label>
        <WalletConnect />
      </div>
    </PanelHeader>
    </panel>
  );
};

export default CustomPanelHeaderCustomer;