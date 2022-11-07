import "./App.css";
import { HelpLinks } from "./Components/HelpLinks/HelpLinks";
import { Header } from "./Components/Header/Header";
import "./styles.scss";
import "./Components/icons.scss";

function App() {
  return (
    <div className="App">
      <section className="help-links-wrapper">
        <HelpLinks />
      </section>
      <header className="header-wrapper">
        <Header />
      </header>
    </div>
  );
}

export default App;
