import React from "react";
import PropTypes from "prop-types";

import { Panel, Button, Div } from "@vkontakte/vkui";
import CustomPanelHeaderCustomer from "../components/CustomPanelHeaderCustomer/CustomPanelHeaderCustomer";

import {
  PanelHeader,
  PanelHeaderBack,
  Header,
  Group,
  Cell,
  Avatar,
  CardGrid,
  Card,
  CellButton,
  useAdaptivityConditionalRender,
  PopoutWrapper,
  ModalDismissButton,
} from "@vkontakte/vkui";

const Customer = ({ id, go }) => (
  <Panel id={"Customer"}>
    <PanelHeader before={<PanelHeaderBack onClick={() => setActiveView('home')} />}></PanelHeader>
    <CustomPanelHeaderCustomer/>
    <Group description="NFT">
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: '50%' }} />
          <CellButton onClick={"r"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '50%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '50%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
      </CardGrid>
      <CardGrid size="s">
        <Card>
          <div style={{ paddingBottom: '50%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '50%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
        <Card>
          <div style={{ paddingBottom: '50%' }} />
          <CellButton onClick={"R"}>Использовать</CellButton>
        </Card>
      </CardGrid>
    </Group>
  </Panel>
);

const CustomPopout = ({ onClose }) => {
  const { sizeX } = useAdaptivityConditionalRender();
  return (
    <PopoutWrapper onClick={onClose}>
      <div
        style={{
          backgroundColor: 'var(--vkui--color_background_content)',
          borderRadius: 8,
          position: 'relative',
          padding: '12px',
        }}
      >
        <h4>Кастомное модальное окно</h4>

        {sizeX.regular && (
          <ModalDismissButton className={sizeX.regular.className} onClick={onClose} />
        )}
      </div>
    </PopoutWrapper>
  );
};


Customer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Customer;
