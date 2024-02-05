import { ReactNode } from "react";
import "./footer.scss";
import { cn } from "@bem-react/classname";
import React from "react";
import { count } from "@src/utils/dom";
const cnFooter = cn("Footer");

type FooterProps = {
  children: ReactNode;
  align?: "left" | "right";
};

const getVariant = (n: number) => {
  if (n === 1) {
    return "one";
  }

  if (n === 2) {
    return "two";
  }

  return "many";
};

const Footer = ({ children, align = "left" }: FooterProps) => {
  // const c = React.Children.count(children);
  const c = count(children);
  console.log(c);
  const variant = getVariant(c);
  return <div className={cnFooter("", { variant, align })}>{children}</div>;
};

export default Footer;
