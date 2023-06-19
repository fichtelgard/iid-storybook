import React, { useEffect, useState } from "react";
import "./assets/iid_main.scss";
import IIDHeader from "./ui/header/IIDHeader";
import BlockUI from "./ui/blocks/BlockUI";
import Collection from "./ui/collection/Collection";
import Card, { CardProps } from "./ui/card/Card";
import cards from "./config.json";
import { CollectionStyle } from "./ui/collection/enum/CollectionStyle";

function App() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted((current) => {
      return true;
    });
  }, []);

  if (!mounted) {
    return <div>Loading</div>;
  }

  const renderCards = () => {
    return cards.cards.map((card: CardProps, index: number) => {
      return <Card title={card.title} content={card.content} key={index} />;
    });
  };

  return (
    <>
      <IIDHeader title={"Coding"} />
      <main>
        <BlockUI fullwidth={false}>
          <Collection style={CollectionStyle.TRIPPLE} title={"Hallo"}>
            {renderCards()}
          </Collection>
        </BlockUI>
      </main>
      <footer>
        <BlockUI fullwidth={false}>Der Footer</BlockUI>
      </footer>
    </>
  );
}

export default App;
