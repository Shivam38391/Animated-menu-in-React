import { useState } from "react";

import Header from "./components/Header/Header";
import ContactButton from "./components/contactButton/ContactButton";

import "./App-copy.scss";
import MenuManager from "./components/Menu/MenuManager/MenuManager";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MenuManager>
      <Header />
        <div className="main-container" id="main-container">
          <h1>
            Bleu <br /> Blanc <br />
            studio
          </h1>
        </div>
      <ContactButton />
    </MenuManager>
  );
}

export default App;
