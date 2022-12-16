import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const BannerComponent = ({ className,children, ...rest }) => {
  const bannerClass = classNames("banner-component", className);
  return (
    <div className={bannerClass} {...rest}>
      {children}
    </div>
  );
};
BannerComponent.propTypes = {
  className: PropTypes.string,
};
BannerComponent.defaultProps = {
  className: "",
};
