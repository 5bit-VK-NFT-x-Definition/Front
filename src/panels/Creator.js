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
  DateInput,
  ChipsInput,
} from "@vkontakte/vkui";

const Creator = ({ id, go, onBackClick }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState(() => new Date());
  const [eventAddresses, setEventAddresses] = useState([]);
  const [publish, setPublish] = useState(false);

  const submit = () => {
    console.log(eventName);
    console.log(eventDescription);
    console.log(eventDate);
    console.log(eventAddresses);
    console.log(publish);
  };

  return (
    <Panel id={id}>
      <CustomPanelHeader name="Content Producer" />
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
