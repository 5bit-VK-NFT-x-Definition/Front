import React from "react";
import PropTypes from "prop-types";
import "./Home.css";

import { Panel, Button, Div } from "@vkontakte/vkui";
import CustomPanelHeader from "../components/CustomPanelHeader/CustomPanelHeader";
import ShopWindow from "../components/ShopWindow/ShopWindow";

const Home = ({ id, go }) => (
  <Panel id={id}>
    <CustomPanelHeader />

    <Div className="homechoices">
      <Button stretched onClick={go} data-to="creator">
        Content Producer
      </Button>
      <Button stretched className="rightchoice" onClick={go} data-to="customer">
        Content Consumer
      </Button>
    </Div>
    <ShopWindow />
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
