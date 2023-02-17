import React from "react";
import PropTypes from "prop-types";
import "./Home.css";

import { Panel, Button, Div, CardGrid, Card, Group } from "@vkontakte/vkui";
import CustomPanelHeader from "../components/CustomPanelHeader/CustomPanelHeader";

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
    <hr />
    <Group>
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: "92%" }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: "92%" }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: "92%" }} />
        </Card>
      </CardGrid>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
