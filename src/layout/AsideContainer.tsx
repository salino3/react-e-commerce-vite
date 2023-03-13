import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const AsideContainer: React.FC<Props> = ({ children }) => {

  const [toggleBtn, setToggleBtn] = React.useState(true);
 
    return (
      <aside className={` ${toggleBtn ? "asideContainer1" : "asideContainer2"}`} >
        <button
          className="  text-success rounded bg-warning  m-1 btnAside"
          onClick={() => setToggleBtn(!toggleBtn)}
        >
          <h5>
            {toggleBtn ? ">>" : "<<"}
            <i className="bi bi-cart4" />
          </h5>
        </button>
        {toggleBtn && children}
      </aside>
    );
};

