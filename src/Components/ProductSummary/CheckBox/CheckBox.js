import React from "react";

export const CheckBox = ({state, onChange}) => {
  return (
    <div className="checkbox-component">
     <input
            name="compare"
            type="checkbox"
            checked={state}
            onChange={() => onChange(!state)} />
            <span>Compare</span>
    </div>
  );
};
