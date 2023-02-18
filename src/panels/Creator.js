import React, { useState } from "react";
import PropTypes from "prop-types";

import CustomPanelHeader from "../components/CustomPanelHeader/CustomPanelHeader";

import {
  Panel,
  FormLayout,
  FormItem,
  Input,
  Checkbox,
  Button,
  Link,
} from "@vkontakte/vkui";

const Creator = ({ id, go, onBackClick }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventAddress, setEventAddress] = useState("");

  return (
    <Panel id={id}>
      <CustomPanelHeader name="Content Producer" />
      <FormLayout>
        <FormItem top="Название события">
          <Input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </FormItem>
        <FormItem top="Описание события">
          <Input />
        </FormItem>
        <FormItem top="Дата">
          <Input />
        </FormItem>
        <FormItem top="Адрес">
          <Input />
        </FormItem>
        <FormItem top="Количество приглашенных">
          <Input type="number" />
        </FormItem>
        <Checkbox description="Пользователи смогут забрать свои билеты сразу после создания контракта">
          Опубликовать контракт
        </Checkbox>
        <FormItem>
          <Button size="s" stretched>
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
