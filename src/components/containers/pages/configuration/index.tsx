import React from "react";
import { useSelector } from 'react-redux';
import ButtonWrapper from "components/ui-components/button-wrapper";

export default function ConfigurationPage() {
  const state = useSelector((state: any) => state.configReducer)
  const { starsColor } = state;

  const configButtonsColor = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "orange",
    "salmon",
  ];

  return (
    <div>
      <h1 className="jumbotron"> Configuration </h1>
      <span style={{ color: starsColor }}> Selected color </span>

      <div>
        {configButtonsColor.map((color, i) => {
          return <ButtonWrapper key={i} color={color} />;
        })}
      </div>
    </div>
  );
}