function RadioList({ name, frequency, image, open, idx, setSelected }) {
  return (
    <div style={styles.main}>
      <div style={styles.detail} onClick={()=>{setSelected(idx)}}>
        <span>{name}</span>
        <span style={styles.freq}>{frequency}</span>
      </div>
      <div className={"animate-height" + (open ? " open" : " close")} style={styles.content}>
        <div style={styles.btn}><i class="far fa-minus-square"></i></div>
        <img src={image} alt={name} style={styles.img} />
        <div style={styles.btn}><i class="far fa-plus-square"></i></div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    overflow: "hidden",
    borderBottom: "solid 1px black",
    margin: "1rem",
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
    height: "5rem",
    width: "5rem",
  }
};

export default RadioList;
