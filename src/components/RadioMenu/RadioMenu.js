import { useState, useEffect } from "react";
import axios from "axios";

import RadioLists from "./RadioLists";

function RadioMenu() {

  const [radios, setRadios] = useState([]);

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
          Stations
        </div>
        <RadioLists radios={radios} />
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
