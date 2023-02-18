import React, { useState } from "react";
import PropTypes from "prop-types";
import { Panel, PanelHeaderBack } from "@vkontakte/vkui";

import CustomPanelHeaderCustomer from "../components/CustomPanelHeaderCustomer/CustomPanelHeaderCustomer";
import WatchCard from "../components/WatchCard/WatchCard";
import ShopWindow from "../components/ShopWindow/ShopWindow";

const CreatorSecond = ({ id, go }) => (
  <Panel id={"CreatorSecond"}>
    <CustomPanelHeaderCustomer />
    <PanelHeaderBack onClick={go} data-to="creator" />
    <ShopWindow object={<WatchCard />} />
  </Panel>
);

CreatorSecond.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CreatorSecond;
