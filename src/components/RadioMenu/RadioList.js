function RadioList({ name, frequency, image, open, selectRadio, selectPrev, selectNext }) {
  return (
    <div style={styles.main}>
      <div className={"list-content" + (open ? " open" : "")} style={styles.content}>
        <div style={styles.btn} onClick={selectPrev}>
          <i className="fas fa-minus-circle"></i>
        </div>
        <img src={image} alt={name} style={styles.img} />
        <div style={styles.btn} onClick={selectNext}>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
      <div style={styles.detail} onClick={selectRadio}>
        <span>{name}</span>
        <span style={styles.freq}>{frequency}</span>
      </div>
    </div>
  );
}

const styles = {
  main: {
    overflow: "hidden",
    borderBottom: "solid 1px #a3a8b7",
    margin: "1rem",
    color: "#a3a8b7",
  },
  detail: {
    height: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1.25rem",
  },
  freq: {
    fontWeight: 700,
  },
  content: {
    height: "8rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 3rem",
    overflow: "hidden",
  },
  btn: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  img: {
    height: "7rem",
    width: "7rem",
    border: "solid 0.2rem #a3a8b7",
    borderRadius: "100%",
  }
};

export default RadioList;
