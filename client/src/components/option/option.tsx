import { cn } from "@bem-react/classname";
import React, { useCallback } from "react";
const cnOption = cn("Option");
import "./option.scss";
type TOption = {
  title: string;
  value: string;
  state?: "correct" | "error" | "selected";
  onSelect?: (value: string) => void;
};

const Option = ({ title, value, state, onSelect }: TOption) => {
  const handleSelect = useCallback(() => onSelect?.(value), [onSelect, value]);

  return (
    <div
      className={cnOption("", state && { [state]: true })}
      onClick={handleSelect}
    >
      {title}
    </div>
  );
};

export default Option;
