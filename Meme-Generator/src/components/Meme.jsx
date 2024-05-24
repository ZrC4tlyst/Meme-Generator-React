import styles from "./Meme.module.css";
import memesData from "../../memesData";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    let memesArray = memesData.data.memes;
    let randomMemeImg = Math.floor(Math.random() * memesArray.length);
    // eslint-disable-next-line no-unused-vars
    const url = memesArray[randomMemeImg].url;
    // eslint-disable-next-line no-unused-vars
    setMemeImage((memeImage) => url);
  }

  return (
    <>
      <div className={`${styles.form}`}>
        <div className={`${styles["inputs-container"]}`}>
          <input type="text" placeholder="Top text" />
          <input type="text" placeholder="Bottom text" />
        </div>
        <button onClick={getMemeImage}>Get new meme image 🎨</button>
      </div>
          <img src={memeImage} alt="" className={styles.image } />
    </>
  );
};

export default Meme;
