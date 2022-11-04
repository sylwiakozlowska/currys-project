import "./App.css";
import { HelpLinks } from "./Components/HelpLinks/HelpLinks";
import "./styles.scss";
import "./Components/icons.scss";

function App() {
  return (
    <div className="App">
      <section className="help-links-wrapper">
        <HelpLinks />
      </section>
      <header className="header-wrapper">hello</header>
    </div>
  );
}

export default App;
