import * as React from "react";
import { ReactComponent as LoadingCircleIcon } from "./assets/loadingCircleSimple.svg";
import "./assets/style_loading.scss";

export interface LoadingCircleProps {
  micro?: boolean;
}
export interface LoadingCircleState {}

class LoadingCircle extends React.Component<
  LoadingCircleProps,
  LoadingCircleState
> {
  render() {
    const { micro } = this.props;
    const classes = micro ? "loading_circle micro" : "loading_circle";
    return (
      <div className={classes}>
        <LoadingCircleIcon />
        <LoadingCircleIcon />
        <LoadingCircleIcon />
      </div>
    );
  }
}

export default LoadingCircle;
