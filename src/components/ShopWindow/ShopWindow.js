import React from "react";
import "./ShopWindow.css";

import { Panel, Button, Div, CardGrid, Card, Group } from "@vkontakte/vkui";

const ShopWindow = () => {
  return (
    <Group>
      <CardGrid size="s">
        <Card mode="shadow" className="cardticket"></Card>
        <Card mode="shadow" className="cardticket"></Card>
        <Card mode="shadow" className="cardticket"></Card>
      </CardGrid>
    </Group>
  );
};

export default ShopWindow;
