import * as React from "react";
import LoadingCircle from "./LoadingCircle";
import "./assets/style_loading.scss";

export interface LoadingPanelProps {
  info?: string;
}
export interface LoadingPanelState {}

class LoadingPanel extends React.Component<
  LoadingPanelProps,
  LoadingPanelState
> {
  render() {
    const { info } = this.props;
    return (
      <div className={"loading_panel"}>
        <div className={"loading_core"}>
          <LoadingCircle />
          {info && <div className={"loading_info"}>{info}</div>}
        </div>
      </div>
    );
  }
}

export default LoadingPanel;
