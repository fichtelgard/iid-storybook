import * as React from "react";
import "./assets/card.scss";

export interface CardProps {
  title: string;
  content?: string;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <div className="card_inner">
        <div className="card_content">
          <div className="card_content_wrapper">
            <div className="card_title">{props.title}</div>
            {props.content && <div className="card_text">{props.content}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
