import { useState } from "react";

function RadioMenu() {

  const [radios, setRadios] = useState([]);

  return (
    <div style={styles.container}>
        <div style={styles.head}>
          Stations
        </div>
        <div>
          <ul>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
        <div style={styles.bottom}>
          Stations
        </div>
    </div>
  );
}

const styles = {
  container: {
    width: "24rem",
    height: "30rem",
    margin: "1rem",
    borderRadius: "2rem",
    overflow: "hidden",
  },
  head: {
    padding: "1rem",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 700,
    background: "#3081f2",
  }
};

export default RadioMenu;
