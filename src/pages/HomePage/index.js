import React from "react";
import AllSpeak from "../../components/Cards/AllSpeak";
import ChopCheese from "../../components/Cards/ChopCheese";
import RememberDat from "../../components/Cards/RememberDat";
import Main from "../../components/Main";
import "../../App.css";

const HomePage = () => {
  const sections = [<Main />, <AllSpeak />, <ChopCheese />, <RememberDat />];
  const renderSection = (section) => {
    for (let i = 0; i < section.length; i++) {
      return section;
    }
  };

  return <>{renderSection(sections)}</>;
};

export default HomePage;
