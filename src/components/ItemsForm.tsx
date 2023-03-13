import React from 'react';

interface Props {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  first: string;
};

export const ItemsForm: React.FC<Props> = (props) => {
  const {handleChange, first} = props;

  return (
    <>
      <label htmlFor="product" className="text-success bg-white px-1 rounded">
        Look for with number or title
      </label>
      <br />
      <input
        onChange={handleChange}
        type="text"
        value={first || ""}
        name="product"
        required
      />
      <button
        disabled={ first ? false : true}
        className="btn btn-primary m-1" >
        Search
      </button>
    </>
  );
};
