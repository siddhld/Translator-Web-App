import React, { useState } from "react";
import Translator from "./Translator";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <div className={theme ? "light" : "dark"}>
      <Translator value={theme} set={setTheme}/>
    </div>
  );
}

export default App;
