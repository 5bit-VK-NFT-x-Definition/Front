import React from "react";
import PropTypes from "prop-types";
import "./Home.css";

import { Panel, Button, Div } from "@vkontakte/vkui";
import CustomPanelHeader from "../components/CustomPanelHeader/CustomPanelHeader";
import ShopWindow from "../components/ShopWindow/ShopWindow";
import ClaimCard from "../components/ClaimCard/ClaimCard";

const Home = ({ id, go }) => (
  <Panel id={id}>
    <CustomPanelHeader name={"Home"} />

    <Div className="homechoices">
      <Button stretched onClick={go} data-to="creator">
        Content Producer
      </Button>
      <Button stretched className="rightchoice" onClick={go} data-to="customer">
        Content Consumer
      </Button>
    </Div>
    <hr />
    <ShopWindow object={<ClaimCard />} />
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
