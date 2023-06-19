import * as React from "react";
import { ReactNode, useEffect } from "react";
import { CollectionStyle } from "./enum/CollectionStyle";
import "./assets/collection.scss";

/**
 * Das Interface für eine CardCollection
 */
export interface CollectionProps {
  style?: CollectionStyle;
  children?: ReactNode;
  title?: string;
}

/**
 * Eine Card-Collection ist grunsätzlich heranzuziehen, wenn Card-Layouts verwendet werden.
 * @param props
 * @constructor
 */
function Collection(props: CollectionProps) {
  const apply_effect = (event: MouseEvent, card: HTMLElement) => {
    // Wir holen uns die Position von einer Card im Browser-Fenster
    const rect = card.getBoundingClientRect();

    // wir berechnen das Zentrum unseres Radialen-Verlaufs innerhalb der Card basierend auf der Mausposition
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Wir setzen die CSS-Variablen auf die vom Stylesheet aus zugeriffen wird
    card.style.setProperty("--xPos", x + "px");
    card.style.setProperty("--yPos", y + "px");
    card.style.setProperty("--colorModifier1", (x % 255) + "");
    card.style.setProperty("--colorModifier2", (y % 255) + "");
    card.style.setProperty("--colorModifier3", ((x + y) % 255) + "");
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".card");

    function handleMove(event: MouseEvent) {
      cards.forEach((card) => {
        // Und wenden unseren Effekt an
        apply_effect(event, card);
      });
    }

    if (body) {
      console.log("Adding EventListener");
      body.addEventListener("mousemove", handleMove);
    }

    return () => {
      if (body) {
        console.log("Removing EventListener");
        body.removeEventListener("mousemove", handleMove);
      }
    };
  }, [props.children]);

  const renderClasses = () => {
    let classes: string = "card_collection";
    switch (props.style) {
      case CollectionStyle.MONO:
        classes += " mono";
        break;
      case CollectionStyle.DUO:
        classes += " duo";
        break;
      case CollectionStyle.QUAD:
        classes += " quad";
        break;
      case CollectionStyle.TRIPPLE:
      default:
        classes += " tripple";
    }
    return classes;
  };

  return <div className={renderClasses()}>{props.children}</div>;
}

export default Collection;
