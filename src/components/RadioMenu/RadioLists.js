import RadioList from "./RadioList";

function RadioLists({ radios }) {
  return (
    <div style={styles.main}>
      { radios && radios.map(radio=>(
        <RadioList
          key={radio.name}
          name={radio.name}
          frequency={radio.frequency}
          image={radio.image}
          open={true}
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
