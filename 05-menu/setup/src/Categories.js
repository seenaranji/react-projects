import React, { useState } from "react";

const Categories = (props) => {
  const { categoriesAll, filterItems } = props;
  console.log({ categoriesAll });

  return (
      <div className="btn-container">
        {categoriesAll.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
};

export default Categories;
