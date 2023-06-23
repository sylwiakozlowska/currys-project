import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles.scss";
import classnames from "classnames";

export const Tabs = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabOptions = items.map((tabOption, i) => {
    const { title } = tabOption;

    const onChangeTab = () => {
      setSelectedTab(i);
    };
    //i = index
    const active = classnames({ "is-active": selectedTab === i });
    return (
      <li className={active} onClick={onChangeTab}>
        <a>{title}</a>
      </li>
    );
  });
  return (
    <div className="tabs-component">
      <div class="tabs is-medium is-centered">
        <ul>{tabOptions}</ul>
      </div>
      {items[selectedTab].comp}
    </div>
  );
};
