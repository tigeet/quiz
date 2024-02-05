import { cn } from "@bem-react/classname";
import "./progress.scss";
import React, { useRef } from "react";
const cnProgress = cn("Progress");
type ProgressProps = {
  progress: number;
};

const Progress = ({ progress }: ProgressProps) => {
  // const backgroundRef = useRef();
  return (
    <div className={cnProgress()}>
      <div
        className={cnProgress("Current")}
        style={{ width: `${100 * progress}%` }}
      />
    </div>
  );
};

export default Progress;
