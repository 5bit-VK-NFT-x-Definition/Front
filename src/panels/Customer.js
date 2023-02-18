import React from "react";
import PropTypes from "prop-types";

import { Panel, Button, Div } from "@vkontakte/vkui";
import CustomPanelHeader from "../components/CustomPanelHeaderCustomer/CustomPanelHeaderCustomer";

import {
  PanelHeader,
  Header,
  Group,
  Cell,
  Avatar,
} from "@vkontakte/vkui";

const Customer = ({ id, go }) => (
  <Panel id={id}>
    <CustomPanelHeader />
  </Panel>
);

Customer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Customer;
