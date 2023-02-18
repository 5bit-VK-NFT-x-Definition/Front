import React from "react";
import PropTypes from "prop-types";

import { Panel, Button, Div } from "@vkontakte/vkui";

import {
  PanelHeader,
  PanelHeaderBack,
  Header,
  Group,
  Cell,
  Avatar,
  CardGrid,
  Card
} from "@vkontakte/vkui";
import CustomPanelHeaderCustomer from "../components/CustomPanelHeaderCustomer/CustomPanelHeaderCustomer";

const Customer = ({ id, go }) => (
  <Panel id={"Customer"}>
    <PanelHeader before={<PanelHeaderBack onClick={() => setActiveView('home')} />}></PanelHeader>
    <CustomPanelHeaderCustomer/>
    <Group description="Внутри NFT">
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: '92%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '92%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '92%' }} />
        </Card>
      </CardGrid>
    </Group>
  </Panel>
);


Customer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Customer;
