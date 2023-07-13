import Header from "./Layout/Header";
import Left from "./Layout/Left";
import Right from "./Layout/Right";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Left />
        <Right />
      </main>
    </>
  );
};

export default App;
