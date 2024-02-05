import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import "./road.scss";
import useProgress from "./useProgress";

type TMode = "path" | "point";
function getOppositeMode(mode: TMode): TMode {
  if (mode === "path") {
    return "point";
  }

  return "path";
}
const Road = () => {
  const [mode, setMode] = useState<"path" | "point">("point");
  const roadRef = useRef<SVGPathElement>(null);
  const pointRef = useRef<SVGSVGElement>(null);
  const [progress, setProgress] = useProgress({
    defaultValue: 0,
    interval: 10,
    duration: 300,
    threshold: 0.1,
  });

  useEffect(() => {
    const roadEl = roadRef.current;
    const pointEl = pointRef.current;
    if (!roadEl || !pointEl) {
      return;
    }

    const length = roadEl.getTotalLength();
    const point = roadEl.getPointAtLength(length * progress);
    const offset = length * (1 - progress);

    if (mode === "path") {
      roadEl.style.strokeDasharray = length + " " + length;
      roadEl.style.strokeDashoffset = offset + "";
    } else {
      pointEl.style.left = point.x + "px";
      pointEl.style.top = point.y + "px";
    }
  });

  const handleSetMode = useCallback(() => {
    setMode((mode) => {
      console.log("@set");
      return getOppositeMode(mode);
    });
    console.log("@log");
  }, []);

  const handleProgress = useCallback(
    (v: number) => {
      setProgress(v);
    },
    [setProgress]
  );
  return (
    <>
      <input
        type="range"
        className="progress"
        max={1}
        step={0.01}
        defaultValue={0}
        min={0}
        value={progress}
        onChange={(e) => handleProgress(parseFloat(e.target.value))}
      />

      <button className="button" onClick={handleSetMode}>
        {mode}
      </button>
      <div className="wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="434"
          viewBox="0 0 148 434"
          fill="none"
        >
          <path
            ref={roadRef}
            d="M20 1C9 34 -6.4 105.2 20 126C53 152 104 180 121 214C134.6 241.2 111.333 282.667 98 300C60.6667 308.333 -10.6 331.2 3 356C16.6 380.8 104.667 417.667 147 433"
            stroke="black"
          />
        </svg>
        <svg
          className="point"
          ref={pointRef}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle cx="16" cy="16" r="16" fill="#D9D9D9" stroke="none" />
        </svg>
      </div>
    </>
  );
};

export default memo(Road);
