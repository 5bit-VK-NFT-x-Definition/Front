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

const Creator = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Creator</PanelHeader>
    abc
  </Panel>
);

Creator.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Creator;
