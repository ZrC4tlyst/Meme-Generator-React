import styles from "./Meme.module.css";

const Meme = () => {
  return (
    <>
      <div className={`${styles.form}`}>
        <div className= {`${styles['inputs-container']}`}>
          <input type="text" />
          <input type="text" />
        </div>
        <button>Get new meme image 🎨</button>
      </div>
    </>
  );
};
export default Meme;
