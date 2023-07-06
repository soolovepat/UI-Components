import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Select from "./components/Select";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Button />
      <Input />
      <Modal />
      <Select />
    </main>
  );
};

export default App;
