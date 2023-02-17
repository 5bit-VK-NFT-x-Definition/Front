import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go}) => (
	<Panel id={id}>
		<PanelHeader>5bit cool proga</PanelHeader>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
