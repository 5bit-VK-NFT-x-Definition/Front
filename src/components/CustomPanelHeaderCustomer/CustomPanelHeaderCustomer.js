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

const CustomPanelHeader = () => {
  return (
    <panel id ="Customer">
        <PanelHeader before={<PanelHeaderBack onClick={() => setActiveView('home')} />}>
            VK NFT-билеты Definition
        </PanelHeader>
    </panel>
    );
};

export default CustomPanelHeader;