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
import CustomPanelHeader from "../components/CustomPanelHeader/CustomPanelHeader";

const Home = ({ id, go }) => (
  <Panel id={id}>
    <CustomPanelHeader />
    abc
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Home;
