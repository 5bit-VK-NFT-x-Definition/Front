import React from "react";
import "./ShopWindow.css";

import { Panel, Button, Div, CardGrid, Card, Group } from "@vkontakte/vkui";
import ClaimCard from "../ClaimCard/ClaimCard";

const ShopWindow = () => {
  return (
    <Group>
      <CardGrid size="s">
        <ClaimCard />
        <ClaimCard />
        <ClaimCard />
      </CardGrid>
      <CardGrid size="s">
        <ClaimCard />
        <ClaimCard />
        <ClaimCard />
      </CardGrid>
    </Group>
  );
};

export default ShopWindow;
