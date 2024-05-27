import styles from "./Meme.module.css";
import "../App.css";
import memesData from "../../memesData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "topText",
    bottomText: "bottomText",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  console.log(meme);
  // eslint-disable-next-line no-unused-vars
  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getMemeImage(e) {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    let url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <>
      <div className={`${styles.form}`}>
        <div className={`${styles["inputs-container"]}`}>
          <input
            type="text"
            placeholder="Top text"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />

          <input
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMemeImage}>Get new meme image 🎨</button>
      </div>
      <div className={`${styles["meme-container"]}`}>
        <img src={meme.randomImage} className={styles["meme-image"]} />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </>
  );
};

export default Meme;
