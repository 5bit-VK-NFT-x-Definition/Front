import React from "react";
import "./ShopWindow.css";

import { Panel, Button, Div, CardGrid, Card, Group } from "@vkontakte/vkui";
import ClaimCard from "../ClaimCard/ClaimCard";

const ShopWindow = ({ object }) => {
  return (
    <Group>
      <CardGrid size="s">
        {object}
        {object}
      </CardGrid>
      <CardGrid size="s">
        {object}
        {object}
      </CardGrid>
    </Group>
  );
};

export default ShopWindow;
