import * as React from "react";
import "./assets/style_user_widget.scss";

export interface UserWidgetProps {
  loggedIn: boolean;
  userName?: string;
  newsCount?: number;
}

function UserWidget(props: UserWidgetProps) {
  const alertSomething = () => {
    window.alert("Hallo");
  };

  const renderContent = () => {
    if (props.loggedIn) {
      if (props.userName) {
        return <div>{props.userName}</div>;
      } else {
        return <div>Unknown User</div>;
      }
    } else {
      return <div>Jetzt einloggen</div>;
    }
  };

  const renderClasses = () => {
    let classes: string = "user-widget";
    if (props.loggedIn) {
      classes += " online";
    } else {
      classes += " offline";
    }
    return classes;
  };

  return (
    <div className={renderClasses()} onClick={alertSomething}>
      <div className={"user-widget-core"} onClick={alertSomething}>
        <div className={"user-widget-avatar"}></div>
        <div className={"user-widget-content"}>{renderContent()}</div>
      </div>
    </div>
  );
}

export default UserWidget;
