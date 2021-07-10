import { useState } from "react";
import "./styles.css";

function App() {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  return (
    <div className="App">
      <h1
        className={"animate-height" + (open ? " open" : " close")}
        style={styles.h1}
      >
        Test
      </h1>
      <button onClick={toggleOpen}>open</button>
    </div>
  );
}

const styles = {
  h1: {
    display: "block",
    overflow: "hidden"
  }
};

export default App;
