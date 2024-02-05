import React, { ReactElement } from "react";
import { ReactNode } from "react";

export const isReactFragment = (
  component: ReactNode
): component is ReactElement => {
  if (React.Children.count(component) !== 1) {
    return false;
  }

  const onlyChild = React.Children.only(component);
  if (!onlyChild) {
    return false;
  }

  if (!(typeof onlyChild === "object") || !("type" in onlyChild)) {
    return false;
  }

  if (onlyChild.type === React.Fragment || onlyChild.type === "Fragment") {
    return true;
  }

  return false;
};

export const unwrap = (component: ReactNode): ReactNode[] => {
  while (isReactFragment(component)) {
    component = component.props.children;
  }
  const asArray = React.Children.toArray(component);
  console.log(asArray);

  return asArray.map((entry) =>
    isReactFragment(entry) ? unwrap(entry.props.children) : entry
  );
};

export const count = (component: ReactNode): number => unwrap(component).length;
