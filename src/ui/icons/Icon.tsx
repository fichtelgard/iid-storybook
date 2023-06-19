import * as React from "react";
import { MouseEventHandler } from "react";
import "./assets/bri-icons.scss";
import { IconType } from "./enum/IconType";

export interface IconProps {
  iconType: IconType;
  additonalClass?: string;
  onClick?: MouseEventHandler;
}

function Icon(props: IconProps) {
  let classes =
    "bri-icons " +
    props.iconType +
    (props.additonalClass ? " " + props.additonalClass : "");
  return <span className={classes} onClick={props.onClick} />;
}

export default Icon;
