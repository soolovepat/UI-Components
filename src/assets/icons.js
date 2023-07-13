import {
  Stars,
  SuitHeartFill,
  XLg,
  CaretDownFill,
} from "react-bootstrap-icons";

const stars = () => {
  return <Stars size={20} />;
};

const suitHeartFill = () => {
  return <SuitHeartFill size={16} />;
};
const xLg = () => {
  return <XLg size={12} />;
};

const caretDownFill = () => {
  return <CaretDownFill size={12} />;
};

const ICON = { stars, suitHeartFill, xLg, caretDownFill };
export default ICON;
