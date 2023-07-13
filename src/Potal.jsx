import ReactDOM from "react-dom";

const ModalPotal = ({ children }) => {
  const el = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, el);
};

export default ModalPotal;
