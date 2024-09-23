import React from "react";

const AddButton = ({ manageClick, value, style }) => {
  return (
    <button className={style} onClick={manageClick}>
      {value}
    </button>
  );
};

export default AddButton;
