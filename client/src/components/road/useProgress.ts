import { useCallback, useRef, useState } from "react";

type UseProgressProps = {
  defaultValue: number;
  threshold: number;
  duration: number;
  interval: number;
};
const useProgress = ({
  defaultValue,
  threshold,
  interval,
  duration,
}: UseProgressProps): [number, React.Dispatch<number>] => {
  const [progress, setProgress] = useState(defaultValue);
  // console.log("@init", progress);
  const blocked = useRef<boolean>(false);

  const onSetProgress = useCallback(
    (v: number) => {
      console.log("@call", progress, v);
      if (blocked.current) {
        return;
      }

      if (Math.abs(v - progress) < threshold) {
        setProgress(v);
        return;
      }

      blocked.current = true;

      const step = ((v - progress) / duration) * interval;
      const startTime = Date.now();
      const endTime = startTime + duration;

      const _interval = setInterval(() => {
        if (Date.now() > endTime) {
          blocked.current = false;
          setProgress(v);

          clearInterval(_interval);
          return;
        }

        setProgress((progress) => progress + step);
      }, interval);
    },
    [duration, interval, progress, threshold]
  );

  return [progress, onSetProgress];
};
export default useProgress;
