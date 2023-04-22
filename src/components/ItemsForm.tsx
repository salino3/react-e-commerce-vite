import React from 'react';

interface Props {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  first: string;
};

export const ItemsForm: React.FC<Props> = (props) => {
  const {handleChange, first} = props;

  return (
    <>
      <label htmlFor="product" className="text-success px-1 rounded">
        Look for with number or title
      </label>
      <br />
      <input
        onChange={handleChange}
        type="text"
        value={first || ""}
        id='product'
        required
      />
      <button
        disabled={ first ? false : true}
        className="btn btn_input m-1" >
        Search
      </button>
    </>
  );
};
