import React from "react";
import PropTypes from "prop-types";

import { Panel, Button, Div } from "@vkontakte/vkui";
import CustomPanelHeader from "../components/CustomPanelHeaderCustomer/CustomPanelHeaderCustomer";

import {
  PanelHeader,
  PanelHeaderBack,
  Header,
  Group,
  Cell,
  Avatar,
} from "@vkontakte/vkui";

const Customer = ({ id, go }) => (
  <Panel id={"Customer"}>
    <PanelHeader before={<PanelHeaderBack onClick={() => setActiveView('home')} />}></PanelHeader>
    <CustomPanelHeader />
  </Panel>
);

const ClaimCard = ({ address }) => {
  const onClaimHandler = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, WhitelistNFT.abi, signer);

    await contract.claimNFT();
    // Check success
  };

  return (
    <Card mode="shadow" className="mycard">
      <label>NFT Event Name</label>
      <label>Address</label>
      <Button onClick={onClaimHandler}>Claim</Button>
    </Card>
  );
};

Customer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Customer;
export { ClaimCard }
