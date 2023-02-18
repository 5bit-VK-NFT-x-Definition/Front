import React, { useState } from "react";
import { ethers } from "ethers";

import { Panel, Button, Div, CardGrid, Card, Group, CellButton } from "@vkontakte/vkui";

const CheckCard = () => {
    return (
    <Group description="NFT">
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: '60%' }} />
          <CellButton onClick={"r"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '60%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '60%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
      </CardGrid>
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: '60%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '60%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '60%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
      </CardGrid>
    </Group>
  );
};

export default CheckCard;

