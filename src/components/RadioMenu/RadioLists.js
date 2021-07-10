import RadioList from "./RadioList";

function RadioLists({ radios }) {
  return (
    <div>
      { radios && radios.map(radio=>(
        <RadioList
          key={radio.name}
          name={radio.name}
          frequency={radio.frequency}
          image={radio.image}
        />
      ))}
    </div>
  );
}

const styles = {
  
};

export default RadioLists;
