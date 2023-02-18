import React from "react";
import PropTypes from "prop-types";

import { Panel, Button, Div } from "@vkontakte/vkui";
import CustomPanelHeader from "../components/CustomPanelHeader/CustomPanelHeader";
import CheckCard from "../components/CheckCard/CheckCard";
import ShopWindow from "../components/ShopWindow/ShopWindow";

import {
  PanelHeaderBack,
  useAdaptivityConditionalRender,
  PopoutWrapper,
  ModalDismissButton,
} from "@vkontakte/vkui";

const Customer = ({ id, go }) => {
  return (
    <Panel id={"Customer"}>
      <CustomPanelHeader name={"Content Consumer"} />
      <PanelHeaderBack onClick={go} data-to="home" />
      <ShopWindow object={<CheckCard />} />
    </Panel>
  );
};

// const CustomPopout = ({ onClose }) => {
//   const { sizeX } = useAdaptivityConditionalRender();
//   return (
//     <PopoutWrapper onClick={onClose}>
//       <div
//         style={{
//           backgroundColor: "var(--vkui--color_background_content)",
//           borderRadius: 8,
//           position: "relative",
//           padding: "12px",
//         }}
//       >
//         <h4>Кастомное модальное окно</h4>

//         {sizeX.regular && (
//           <ModalDismissButton
//             className={sizeX.regular.className}
//             onClick={onClose}
//           />
//         )}
//       </div>
//     </PopoutWrapper>
//   );
// };

Customer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Customer;
