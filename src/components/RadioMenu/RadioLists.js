import RadioList from "./RadioList";

function RadioLists({ radios, selected, setSelected }) {
  return (
    <div style={styles.main}>
      { radios && radios.map((radio, idx)=>(
        <RadioList
          key={radio.name}
          name={radio.name}
          frequency={radio.frequency}
          image={radio.image}
          open={idx === selected}
          idx={idx}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

const styles = {
  main: {
    flex: 1,
    overflowY: "auto",
  }
};

export default RadioLists;
