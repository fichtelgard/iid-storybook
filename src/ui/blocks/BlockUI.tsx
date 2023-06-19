import * as React from "react";
import { CSSProperties } from "react";
import "./assets/style_block.scss";
import { BlockStyle } from "./enum/BlockStyle";

export interface BlockProps {
  fullwidth: boolean;
  backgroundImage?: string;
  additionalClass?: string;
  style?: BlockStyle;
  patternOverlay?: boolean;
  contentBlock?: boolean;
  children?: React.ReactNode;
}

/**
 * Block are meant to contain all other components. They are used for the main paddings and content centering.
 */
function BlockUI(props: BlockProps) {
  let background: CSSProperties = {};

  if (props.backgroundImage) {
    background = { backgroundImage: "url(" + props.backgroundImage + ")" };
  }

  let classes = "block";
  classes = props.style ? classes + " " + props.style : classes;
  classes = props.additionalClass
    ? classes + " " + props.additionalClass
    : classes;
  classes = props.fullwidth ? classes + " fullwidth" : classes;
  classes = props.contentBlock ? classes + " content_block" : classes;

  return (
    <div className={classes} style={background}>
      {props.patternOverlay && <div className={"sw-pattern-overlay"} />}
      <div className={"block_core"}>{props.children}</div>
    </div>
  );
}

export default BlockUI;
