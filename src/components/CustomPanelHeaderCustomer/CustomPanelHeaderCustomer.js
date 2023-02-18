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

const CustomPanelHeaderCustomer = () => {
  return (
    <panel id="Customer">
      <PanelHeader before={<PanelHeaderBack onClick={"home"} />}>
        VK NFT-билеты Definition
      </PanelHeader>
      
    </panel>
  );
};

export default CustomPanelHeaderCustomer;
