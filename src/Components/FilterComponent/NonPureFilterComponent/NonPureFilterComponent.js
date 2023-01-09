import React, { useState } from "react";
import { FilterComponent } from "../FilterComponent";
import { useSelector } from "react-redux";
import { selectFilterSlice } from "../../../Store/features/filterComponent/FilterSlice";
export const NonPureFilterComponent = ({filter}) => {
  // if (!selectedFilters){
  //   return null;
  // }
  // const [filters, setFilters] = useState(data);
  // const filter  = useSelector(selectFilterSlice);

  return (
    <div>
      <FilterComponent
        // onClear={onClear}
        filter={filter}
      />
    </div>
  );
};
