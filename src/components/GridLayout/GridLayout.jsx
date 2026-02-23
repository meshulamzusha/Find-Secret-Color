import { useEffect, useState } from "react";
import "./GridLayout.css";

const GridLayout = () => {
  const [boxes, setBoxes] = useState([]);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const boxes = new Array(100).fill(0);
    setBoxes(boxes);
  }, []);

  return (
    <>
      <h1 className="header">
        <p className="header-1">Find the</p>
        <p className="header-2">Secret Color!</p>
        <div className="secret-color"></div>
      </h1>
      <div className="grid-layout">
        {boxes.map((b, index) => {
          return <div className={"color-box"} key={index}></div>;
        })}
      </div>
      <section className="clicks-counter">Clicks: {clicks}</section>
      <footer>Keep Searching!</footer>
    </>
  );
};

export default GridLayout;
