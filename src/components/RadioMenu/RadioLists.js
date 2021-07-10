import RadioList from "./RadioList";

function RadioLists({ radios, selected, setSelected }) {
  
  function selectRadio(idx) {
    setSelected(idx);
  }

  function selectPrev(idx) {
    if(idx - 1 >= 0){
      setSelected(idx - 1);
    }
  }

  function selectNext(idx) {
    if(idx + 1 < radios.length){
      setSelected(idx + 1);
    }
  }
        
  return (
    <div style={styles.main}>
      { radios && radios.map((radio, idx) => (
          <RadioList
            key={radio.name}
            name={radio.name}
            frequency={radio.frequency}
            image={radio.image}
            open={idx === selected}
            selectRadio={()=>selectRadio(idx)}
            selectPrev={()=>selectPrev(idx)}
            selectNext={()=>selectNext(idx)}
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
