import styles from "./Meme.module.css";
import memesData from "../../memesData";

const Meme = () => {
  function getMemeData() {
    let memesArray = memesData.data.memes;
    let randomMemeImg = Math.floor(Math.random() * memesArray.length);
    // eslint-disable-next-line no-unused-vars
    const url = memesArray[randomMemeImg].url;
    console.log(url);
  }

  return (
    <>
      <div className={`${styles.form}`}>
        <div className={`${styles["inputs-container"]}`}>
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button onClick={getMemeData}>Get new meme image 🎨</button>
      </div>
    </>
  );
};

export default Meme;
