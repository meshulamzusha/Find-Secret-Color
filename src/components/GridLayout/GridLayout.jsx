import { useEffect, useState } from "react";
import "./GridLayout.css";

const GridLayout = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const boxes = new Array(100).fill(0);
    setBoxes(boxes);
  }, []);

  return (
    <div className="grid-layout">
      {boxes.map((b, index) => {
       return <div className={"color-box"} key={index}></div>
      })}
    </div>
  );
};

export default GridLayout;