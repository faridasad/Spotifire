"use client"

import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 100;

function Player() {
  const [values, setValues] = useState([10]);
  const [isOver, setIsOver] = useState(false);

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children, isDragged }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          style={{
            ...props.style,
            height: "18px",
            display: "flex",
            width: "100%",
            cursor: "auto",
          }}
        >
          <div
            ref={props.ref}
            onMouseOver={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: values,
                colors: isOver || isDragged ? ["#1db954", "#535353"] : ["#ffffff", "#535353"],
                min: MIN,
                max: MAX,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          {...props}
          className="thumb"
          style={{
            ...props.style,
            opacity: isOver || isDragged ? 1 : 0,
            cursor: "auto",
            outline: "none",
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      )}
    />
  );
}

export default Player;
