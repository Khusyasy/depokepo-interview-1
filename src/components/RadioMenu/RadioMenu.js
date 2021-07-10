import { useState, useEffect } from "react";
import axios from "axios";

import RadioLists from "./RadioLists";

function RadioMenu() {

  const [radios, setRadios] = useState([]);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    axios.get("https://depokepo-mock-server.herokuapp.com/v1/api/radio", { headers: { Authorization: "Basic verysecretapikey" }} )
          .then(({ data })=>{
            setRadios(data.radios);
            console.log(data.radios);
          });
  }, [])

  return (
    <div style={styles.container}>
        <div style={styles.head}>
          STATIONS
        </div>
        <RadioLists radios={radios} selected={selected} setSelected={setSelected} />
        <div style={styles.bottom}>
          <span>
            currently playing
          </span>
          <span>
            { radios[selected]?.name }
          </span>
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
    display: "flex",
    flexDirection: "column",
    border: "solid 1px #8baddd",
  },
  head: {
    height: "3rem",
    display: "grid",
    placeItems: "center",
    textTransform: "uppercase",
    fontWeight: 700,
    background: "#3081f2",
  },
  bottom: {
    height: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#3081f2",
  }
};

export default RadioMenu;
