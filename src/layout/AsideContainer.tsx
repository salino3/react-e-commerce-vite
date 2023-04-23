import React from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: JSX.Element | JSX.Element[];
};

export const AsideContainer: React.FC<Props> = ({ children }) => {

  const isMobile: boolean = useMediaQuery({ maxWidth: 500 });

  const [toggleBtn, setToggleBtn] = React.useState(!isMobile);
 
    return (
      <aside
        className={` rounded ${
          toggleBtn ? "asideContainer1" : "asideContainer2"}`
        }
      >
        <div className="box-aside">
          <button
            className="   text-success rounded  m-1 animate__animated btnAside"
            onClick={() => setToggleBtn(!toggleBtn)}
          >
            <h5>
              {toggleBtn ? ">>" : "<<"}
              <i className="bi bi-cart4" style={{ cursor: "pointer" }} />
            </h5>
          </button>
          {toggleBtn && children}
        </div>
      </aside>
    );
};

