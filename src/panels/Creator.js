import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ethers } from "ethers";

import WhitelistNFT from "../data/WhitelistNFT";

import CustomPanelHeader from "../components/CustomPanelHeader/CustomPanelHeader";

import {
  Panel,
  FormLayout,
  FormItem,
  Input,
  Checkbox,
  Button,
  DateInput,
  ChipsInput,
  PanelHeaderBack,
  Gallery,
} from "@vkontakte/vkui";

const Creator = ({ id, go, onBackClick }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState(() => new Date());
  const [eventAddresses, setEventAddresses] = useState([]);
  const [publish, setPublish] = useState(false);

  const [slideIndex, setSlideIndex] = useState(1);

  const submit = async () => {
    try {
      const response = await axios.post(
        "https://43c1-176-52-77-82.ngrok.io/v1/events/getAll",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const total = response.data.meta.total;

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contractFactory = await new ethers.ContractFactory(
        WhitelistNFT.abi,
        WhitelistNFT.bytecode,
        signer
      );

      const contract = await contractFactory.deploy(
        "VKTicket",
        "VKT",
        total + 1,
        "https://43c1-176-52-77-82.ngrok.io/v1",
        eventAddresses.map((x) => x.value),
        publish
      );

      console.log("https://goerli.etherscan.io/address/" + contract.address);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Panel id={id}>
      <CustomPanelHeader name="Content Producer" />
      <PanelHeaderBack onClick={go} data-to="home" />
      <FormLayout>
        <FormItem top="Название события">
          <Input onChange={(e) => setEventName(e.target.value)} />
        </FormItem>
        <FormItem top="Описание события">
          <Input onChange={(e) => setEventDescription(e.target.value)} />
        </FormItem>
        <FormItem top="Дата">
          <DateInput
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            enableTime={true}
            disablePast={true}
            closeOnChange={true}
            disablePickers={false}
            showNeighboringMonth={false}
            disableCalendar={false}
          />
        </FormItem>
        <FormItem top="Список приглашенных">
          <ChipsInput
            placeholder="Введите адрес и нажмите Enter"
            selected={eventAddresses}
            onChange={setEventAddresses}
          />
        </FormItem>
        <Checkbox
          checked={publish}
          onChange={(e) => setPublish(e.target.value)}
          description="Пользователи смогут забрать свои билеты сразу после создания события"
        >
          Опубликовать событие
        </Checkbox>

        <Gallery
          slideWidth="90%"
          align="center"
          slideIndex={slideIndex}
          onChange={setSlideIndex}
          isDraggable={true}
          showArrows={true}
        >
          <img
            src="https://43c1-176-52-77-82.ngrok.io/images/1.jpeg"
            height="300"
          />
          <img
            src="https://43c1-176-52-77-82.ngrok.io/images/2.jpeg"
            height="300"
          />
          <img
            src="https://43c1-176-52-77-82.ngrok.io/images/3.jpeg"
            height="300"
          />
        </Gallery>
        <FormItem>
          <Button size="s" stretched onClick={submit}>
            Создать событие
          </Button>
        </FormItem>
      </FormLayout>
    </Panel>
  );
};

Creator.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Creator;
