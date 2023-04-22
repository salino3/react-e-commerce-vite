// import React from "react";

// interface HeartCheckboxProps {
//   imageUrl: string;
//   selected: boolean;
//   id: number;
//   CheckboxChange: (id: number) => void;
// }

// const HeartCheckbox: React.FC<HeartCheckboxProps> = (props) => {
//     const { imageUrl, selected, id, CheckboxChange } = props;
    

//   return (
//     <div
//       style={{ display: "inline-flex", alignItems: "center" }}
//     >
//       <input
//         id="heart-checkbox"
//         type="checkbox"
//         style={{ display: "none" }}
//         checked={selected}
//         onChange={() => CheckboxChange(id)}
//       />
//       <label htmlFor="heart-checkbox">
//         <img
//           src={imageUrl}
//           alt="heart"
//           style={{ width: "20px", height: "20px", marginRight: "5px" }}
//         />
//       </label>
//     </div>
//   );
// };

// export default HeartCheckbox;

import React from "react";

interface HeartCheckboxProps {
  imageUrl: string;
  selected: boolean;
  id: number;
  CheckboxChange: (id: number) => void;
}

const HeartCheckbox: React.FC<HeartCheckboxProps> = (props) => {
  const { imageUrl, selected, id, CheckboxChange } = props;

  const handleClick = () => {
    CheckboxChange(id);
  };

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <input
        id={`heart-checkbox-${id}`}
        type="checkbox"
        style={{ display: "none" }}
        checked={selected}
        onChange={() => {}}
      />
      <label htmlFor={`heart-checkbox-${id}`} onClick={handleClick}>
        <img
          src={imageUrl}
          alt="heart"
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
      </label>
    </div>
  );
};

export default HeartCheckbox;
