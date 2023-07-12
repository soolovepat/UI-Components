import "./App.css";
import Left from "./Layout/Left";
import Right from "./Layout/Right";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Left />
      <Right />
    </main>
  );
};

export default App;
