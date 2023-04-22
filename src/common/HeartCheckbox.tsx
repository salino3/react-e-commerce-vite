import React from "react";

interface HeartCheckboxProps {
  selected: boolean;
  id: number;
  CheckboxChange: (id: number) => void;
};

export const HeartCheckbox: React.FC<HeartCheckboxProps> = (props) => {
  const { selected, id, CheckboxChange } = props;

  const handleClick = () => {
    CheckboxChange(id);
  };

  return (
    <label style={{ cursor: "pointer" }} onClick={handleClick}>
      {(selected && <i className="bi bi-heart-fill"></i>) || (
        <i className="bi bi-heart"></i>
      )}
    </label>
  );
};