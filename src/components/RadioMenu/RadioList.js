function RadioList({ name, frequency, image, open, selectRadio, selectPrev, selectNext }) {
  return (
    <div style={styles.main}>
      <div style={styles.detail} onClick={selectRadio}>
        <span>{name}</span>
        <span style={styles.freq}>{frequency}</span>
      </div>
      <div className={"animate-height" + (open ? " open" : "")} style={styles.content}>
        <div style={styles.btn} onClick={selectPrev}>
          <i className="far fa-minus-square"></i>
        </div>
        <img src={image} alt={name} style={styles.img} />
        <div style={styles.btn} onClick={selectNext}>
          <i className="far fa-plus-square"></i>
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    overflow: "hidden",
    borderBottom: "solid 1px #2e6171",
    margin: "1rem",
    color: "#543361",
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
    height: "6rem",
    width: "6rem",
    border: "solid 0.2rem #543361",
    borderRadius: "0.2rem",
  }
};

export default RadioList;
