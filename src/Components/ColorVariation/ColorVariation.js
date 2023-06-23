import React from "react";
import { capitalize } from "../../utils/utils";
export const ColorVariation = ({ colorOption, setColorOption, colorVariation }) => {
  const selectedColor = colorVariation.find((el) => el.id === colorOption);
  const colorList = colorVariation.map((color) => {
    const { id, src, text, selected } = color;
    const onChangeColor = (e) => {
      //const { value } = e.target;
      setColorOption(id);
    };

    const selectedColor =
      colorOption === id
        ? "color-variation-list selected"
        : "color-variation-list";
    return (
      <li className={selectedColor} onClick={onChangeColor}>
        <a href="#">
          <input
            type="radio"
            name="color"
            value={colorOption}
            checked={colorOption === id}
          />
          <img src={src}></img>
        </a>
        <p>{capitalize(text)}</p>
      </li>
    );
  });
  return (
    <div className="color-variation-component">
      <div>Colour: <span>{capitalize(selectedColor.text)}</span> </div>
      <ul>{colorList}</ul>
    </div>
  );
};
