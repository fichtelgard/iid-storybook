import React from "react";
import BlockUI from "../blocks/BlockUI";
import "./assets/style_iid_header.scss";
import Spacer from "../spacer/Spacer";
import UserWidget from "../user-widget/UserWidget";
// @ts-ignore
import logo from "./assets/images/diamond-fire.png";

export interface IIDHeaderProps {
  title?: string;
}

function IIDHeader(props: IIDHeaderProps) {
  return (
    <header className={"iid_header"}>
      <BlockUI fullwidth={false}>
        <div className={"logo"}>
          <img src={logo} alt={"Logo"} />
        </div>
        <div>{props.title} #nice</div>
        <Spacer />
        <UserWidget loggedIn={false} />
      </BlockUI>
    </header>
  );
}

export default IIDHeader;
