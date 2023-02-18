import React, { useState } from "react";
import PropTypes from "prop-types";
import { Panel, Button, Div, PanelHeaderBack, PanelHeader, } from "@vkontakte/vkui";

import CustomPanelHeaderCustomer from "../components/CustomPanelHeaderCustomer/CustomPanelHeaderCustomer";
import CardLib from "../components/CreatorSecondCard/Card";



const CreatorSecond = ({ id, go }) => (
  <Panel id={"CreatorSecond"}>
    <CustomPanelHeaderCustomer />
    <PanelHeaderBack onClick={go} data-to="creator" />
    <CardLib object={<CardLib />} />
  </Panel>
);

CreatorSecond.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CreatorSecond;
