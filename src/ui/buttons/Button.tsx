import * as React from "react";
import { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import LoadingCircle from "../loading/LoadingCircle";
import "./assets/style_buttons.scss";
import { ButtonTypes } from "./enum/ButtonTypes";
import { ButtonStyle } from "./enum/ButtonStyle";
import { IconType } from "../icons/enum/IconType";
import Icon from "../icons/Icon";

export interface ButtonProps {
  title?: string;
  target?: string;
  children?: React.ReactNode;
  style?: ButtonStyle;
  clickHandler?: MouseEventHandler;
  buttonType?: ButtonTypes;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  newWindow?: boolean;
  icon?: IconType;
}

export interface ButtonState {}

/**
 * Eine Class-Component
 * @deprecated Lieber mit Functional-Components zeigen
 */
class Button extends React.Component<ButtonProps, ButtonState> {
  /**
   * Erzeugt den CSS-Classname des Buttons basierend auf dem Style
   *
   * @param {ButtonStyle} style
   * @return {string} string
   */
  getClassName(style?: ButtonStyle): string {
    let classname = "btn btn_";
    return style ? classname + style : classname + ButtonStyle.SECONDARY;
  }

  /**
   *
   */
  render() {
    const {
      title,
      target,
      clickHandler,
      children,
      style,
      buttonType,
      disabled,
      loading,
      newWindow,
      className,
      icon,
    } = this.props;
    let classes = loading
      ? this.getClassName(style) + " loading"
      : this.getClassName(style);

    classes = disabled || loading ? classes + " disabled" : classes;
    if (className) {
      classes += " " + className;
    }

    const theClickHandler = disabled ? () => {} : clickHandler && clickHandler;

    if (style === ButtonStyle.OVERLAY) {
      return (
        <a
          className={classes}
          aria-label={title}
          onClick={theClickHandler}
          href={target && target}
          title={title && title}
        >
          {loading && <LoadingCircle micro={true} />}
        </a>
      );
    }

    const getTextContent = () => {
      if (icon) {
        return (
          <>
            <Icon iconType={icon} />
            {children && <span>{children}</span>}
          </>
        );
      }
      return children;
    };

    switch (buttonType) {
      case ButtonTypes.ANCHOR:
        return (
          <a
            className={classes}
            target={newWindow ? "_blank" : "_self"}
            onClick={theClickHandler}
            href={target && target}
            title={title && title}
          >
            {getTextContent()}
            {loading && <LoadingCircle micro={true} />}
          </a>
        );
      case ButtonTypes.DIV:
        return (
          <div
            className={classes}
            onClick={theClickHandler}
            title={title && title}
          >
            {getTextContent()}
            {loading && <LoadingCircle micro={true} />}
          </div>
        );
      case ButtonTypes.NAVLINK:
        if (!target) {
          return (
            <a
              className={classes}
              target={newWindow ? "_blank" : "_self"}
              onClick={theClickHandler}
              href={target && target}
              title={"Error"}
            >
              {getTextContent()}
              {loading && <LoadingCircle micro={true} />}
            </a>
          );
        }
        return (
          <NavLink
            className={classes}
            target={newWindow ? "_blank" : "_self"}
            onClick={theClickHandler}
            to={target && target}
            title={title && title}
          >
            {getTextContent()}
            {loading && <LoadingCircle micro={true} />}
          </NavLink>
        );
      case ButtonTypes.BUTTON:
      case ButtonTypes.SUBMIT:
      default:
        return (
          <button
            className={classes}
            onClick={theClickHandler}
            title={title && title}
          >
            {getTextContent()}
            {loading && <LoadingCircle micro={true} />}
          </button>
        );
    }
  }
}

export default Button;
