import React from "react";
import { capitalize } from "../../utils/utils";
export const ColorVariation = ({ colorOption, setColorOption, colorVariation }) => {
  console.log("colorVariation", colorVariation);
//   const [colorOption, setColorOption] = useState(colorVariation[0].id);
  //   console.log(
  //     "colorVariation[0]",
  //     colorVariation[0],
  //     colorOption,
  //     colorVariation[0].text
  //   );
  const selectedColor = colorVariation.find((el) => el.id === colorOption);
  console.log(selectedColor.text);
  const colorList = colorVariation.map((color) => {
    const { id, src, text, selected } = color;
    // console.log("color", color);
    const onChangeColor = (e) => {
      //const { value } = e.target;
      setColorOption(id);
      console.log("clicked", color, id, text);
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
