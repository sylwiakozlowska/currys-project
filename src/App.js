import "./App.css";
import { HelpLinks } from "./Components/HelpLinks/HelpLinks";
import { Header } from "./Components/Header/Header";
import { HeaderTablet } from "./Components/HeaderTablet/HeaderTablet";
import {ServiceMenu} from "./Components/ServiceMenu/ServiceMenu";
import "./Components/icons.scss";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <section className="help-links-wrapper">
        <HelpLinks />
      </section>
      <header className="header-wrapper">
        <Header />
        <HeaderTablet />
      </header>
      <section className="service-menu-wrapper">
        <ServiceMenu />
      </section>
    </div>
  );
}

export default App;
