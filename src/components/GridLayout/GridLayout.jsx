import { useEffect, useState } from "react";
import "./GridLayout.css";

const GridLayout = () => {
  const [boxes, setBoxes] = useState([]);
  const [boxOvert, setBoxOvert] = useState(101);
  const [clicks, setClicks] = useState(0);
  const [found, setFound] = useState(false);
  const [secretColor, setSecretColor] = useState(null);

  useEffect(() => {
    const boxes = new Array(100).fill(0);
    const randomIndex = Math.floor(Math.random() * 100);
    boxes[randomIndex] = 1;
    setBoxes(boxes);

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setSecretColor(randomColor);
  }, []);

  return (
    <>
      <h1 className="header">
        <p className="header-1">Find the</p>
        <p className="header-2">Secret Color!</p>
        <div
          className="secret-color"
          style={{
            backgroundColor: secretColor,
          }}
        ></div>
      </h1>
      <div className="grid-layout">
        {boxes.map((b, index) => {
          const isTarget = b === 1;
          const isClicked = index === boxOvert;
          return (
            <div
              className={isClicked ? "overt-box" : "color-box"}
              style={{
                backgroundColor: isTarget && found ? secretColor : "",
              }}
              key={index}
              onClick={() => {
                if (isTarget) {
                  setFound(true);
                }
                if (!found) {
                  setBoxOvert(index);
                  setClicks(clicks + 1);
                }
              }}
            >
              {index === boxOvert && !isTarget && "X"}
            </div>
          );
        })}
      </div>
      <section className="clicks-counter">Clicks: {clicks}</section>
      <footer>
        {found ? "Champion, you found the secret color!" : "Keep Searching!"}
      </footer>
    </>
  );
};

export default GridLayout;
