import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const CardComponent = ({ className,children, ...rest }) => {
  const cardClass = classNames("card", className);
  return (
    <div className={cardClass} {...rest}>
      {children}
    </div>
  );
};
CardComponent.propTypes = {
  className: PropTypes.string,
};
CardComponent.defaultProps = {
  className: "",
};
