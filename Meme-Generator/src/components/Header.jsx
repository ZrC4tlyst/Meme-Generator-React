import styles from "./Header.module.css";
import trollFace from "../assets/troll-face.png";

const Header = () => {
  return (
    <header>
      <nav>
        <section>
          <img src={trollFace} alt="" />
          <h1>Meme Generator</h1>
        </section>
        <h3>Scrimba React Course - Project</h3>
      </nav>
    </header>
  );
};
export default Header;
