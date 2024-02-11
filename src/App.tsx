import { useState } from "react";
import "./App.css";

const phrases = [
  "NO",
  "Please??",
  "Are you sure??",
  "Really sure?!?",
  "Please 🙏",
  "SUPER DUPER SURE?!?!",
  "Don't do this to me please",
  "You're gonna make me cry",
  "You're gonna shatter my heart💔 - ;(",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonTest() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="cinamoroll"
            src="https://media.tenor.com/EA4wWWb88TIAAAAi/love-in-love.gif"
          />
          <div className="text">YAYYY!!!!! I LOVE YOU</div>
        </>
      ) : (
        <>
          <img
            alt="bears kissing"
            src="https://media1.tenor.com/m/67rX4iETMNIAAAAC/streicheln-extase.gif"
            style={{ width: "350px", height: "auto" }}
          />
          <div className="heart-gif-container">
            <img
              alt="hearts"
              src="https://media.tenor.com/Lo99R_iduBMAAAAi/love-hearts.gif"
            />
          </div>
          <div className="heart-gif-container2">
            <img
              alt="hearts"
              src="https://media.tenor.com/Lo99R_iduBMAAAAi/love-hearts.gif"
            />
          </div>
          <div className="valentine-message">
            Sally, will you be my Valentine? 💜
          </div>
          <div>
            <button
              className="yesButton"
              style={{
                backgroundColor: "green",
                fontSize: yesButtonSize,
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              className="noButton"
              style={{
                backgroundColor: "red",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
              onClick={handleNoClick}
            >
              {getNoButtonTest()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
