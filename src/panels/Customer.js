import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
} from "@vkontakte/vkui";

const Customer = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Customer</PanelHeader>
    abc
  </Panel>
);

Customer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Customer;
