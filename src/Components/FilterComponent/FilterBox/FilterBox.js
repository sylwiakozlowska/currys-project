import React from "react";
import { Rating } from "../../Rating/Rating";
import { DropdownBox } from "../DropdownBox/DropdownBox";
import { FilterComp } from "../FilterComp/FilterComp";
import { PriceFilter } from "../PriceFilter/PriceFilter";

const COUNT = 5;

export const FilterBox = ({ groupId, title, filterItems, onChange }) => {
  let filterContent = filterItems.map((filter) => {
    const { id, type, text, count, value, selected } = filter;
    const onChangeSelected = (checked) => {
      onChange(groupId,id,checked);
      // console.log("id,groupId,checked", id,groupId,checked);
    };
    let comp;
    let ratingText;
    switch (type) {
      case "string":
        comp = (
          <FilterComp
            count={count}
            onChange={onChangeSelected}
            selected={selected}
          >
            {text}
          </FilterComp>
        );
        break;
      case "rating":
        if (value < 5) {
          ratingText = `${value} or more`;
        } else {
          ratingText = `${value}`;
        }
        comp = (
          <FilterComp
            count={count}
            onChange={onChangeSelected}
            selected={selected}
          >
            <Rating value={value} count={COUNT} />
            <span className="rating-text">{ratingText}</span>
          </FilterComp>
        );
        break;
      case "price":
        comp = <PriceFilter></PriceFilter>;
        break;
    }
    return <li key={id}>{comp}</li>;
  });
  filterContent = <ul>{filterContent}</ul>;

  return (
    <nav className="filter-box-component">
      <DropdownBox title={title}>{filterContent}</DropdownBox>
    </nav>
  );
};
