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
    <div style={styles.main}>
        <div style={styles.head}>
          <div style={styles.btn}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div style={styles.title}>
            STATIONS
          </div>
          <div style={styles.btn} onClick={()=>setSelected(-1)}>
            <i className="fas fa-power-off"></i>
          </div>
        </div>
        <RadioLists radios={radios} selected={selected} setSelected={setSelected} />
        <div style={styles.bottom}>
        {
          selected > -1 ?
          <>
            <span style={styles.playing}>
              currently playing
            </span>
            <span style={styles.selected}>
              { radios[selected]?.name }
            </span>
          </>
          :
          <span style={styles.selected}>
            OFF
          </span>
        }
        </div>
    </div>
  );
}

const styles = {
  main: {
    width: "20rem",
    height: "30rem",
    margin: "1rem",
    borderRadius: "1rem",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  head: {
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ecad60",
    padding: "0 1rem",
    color: "#fdf8f6",
  },
  btn: {
    cursor: "pointer",
    fontSize: "1.25rem",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: "1.25rem",
  },
  bottom: {
    height: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#22222a",
    color: "#ecad60",
  },
  playing: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    color: "#a3a8b7",
  },
  selected: {
    fontSize: "1.25rem",
  }
};

export default RadioMenu;
