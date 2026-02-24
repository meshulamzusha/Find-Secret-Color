import { useEffect, useState } from "react";
import "./GridLayout.css";

const GridLayout = () => {
  const [boxes, setBoxes] = useState([]);
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
          return (
            <div
              className={"color-box"}
              key={index}
              onClick={() => {
                setClicks(clicks + 1);
                const found = b === 1;
                if (found) {
                    setFound(true)
                }
              }}
            ></div>
          );
        })}
      </div>
      <section className="clicks-counter">Clicks: {clicks}</section>
      <footer>Keep Searching!</footer>
    </>
  );
};

export default GridLayout;
