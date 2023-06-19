import * as React from "react";
import Icon from "./Icon";
import "./assets/bri-icons-animated.scss";
import { IconType } from "./enum/IconType";
import { IconsAnimated } from "./enum/IconsAnimated";
import { useState } from "react";

/**
 *
 */
export interface IconAnimatedProps {
  iconType: IconsAnimated;
  onClick?: Function;
  active?: boolean;
}

function IconAnimated(props: IconAnimatedProps) {
  const [iconType, setIconType] = useState<IconsAnimated>(
    IconsAnimated.MENU_BURGER
  );
  const [active, setActive] = useState<boolean>(false);

  const onClickHandler = (event: any) => {
    event.preventDefault();
    setActive((current) => {
      return !current;
    });
    props.onClick && props.onClick(event);
  };

  let classes = "bri-animated-icons " + iconType + (active ? " active" : "");
  switch (iconType) {
    case IconsAnimated.MENU_BURGER:
      return (
        <span className={classes} onClick={onClickHandler}>
          &nbsp;
          <Icon iconType={IconType.MENU_BURGER_TOP} />
          <Icon
            iconType={IconType.MENU_BURGER_CENTER}
            additonalClass={"menu_burger_center_01"}
          />
          <Icon
            iconType={IconType.MENU_BURGER_CENTER}
            additonalClass={"menu_burger_center_02"}
          />
          <Icon iconType={IconType.MENU_BURGER_BOTTOM} />
        </span>
      );
    case IconsAnimated.CHECKBOX:
      return (
        <span className={classes}>
          &nbsp;
          <Icon iconType={IconType.CHECKBOX_FRAME} />
          <Icon iconType={IconType.CHECKBOX_HOOK} />
        </span>
      );
  }
  return <span>UndefinedIcon</span>;
}

export default IconAnimated;
