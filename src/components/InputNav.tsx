import React from "react";
import { useNavigate } from "react-router-dom";
import { CardInput } from "./CardInput";
import { ItemsForm } from "./ItemsForm";
import "./stylesComponents.scss";

export const InputNav: React.FC = () => {

  const navigate = useNavigate();

  const [first, setFirst] = React.useState<string>("");
  const [toggleList, setToggleList] = React.useState<boolean>(true);

    const divCardRef = React.useRef<HTMLDivElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: any) => {
     setFirst(event.target.value);
     setToggleList(true)
   };

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: any
  ) => {
    event.preventDefault();
    //
    let Searching: string = "";
    if (
      event &&
      event.target &&
      event.target.product &&
      event.target.product.value
    ) {
      Searching = event.target.product.value;
    }
    navigate(`/info/${Searching}`);
    setFirst("")
  };

  //
    React.useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (
          divCardRef.current 
// con contains() se comprueba si ese elemento es un ancestro del elemento que fue clickeado
         && !divCardRef.current.contains(event.target)
        ) {
          setToggleList(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

  return (
    <form onSubmit={handleSubmit}>
      <ItemsForm handleChange={handleChange } first={first} />
      <div className="divCard" ref={divCardRef}>
        {toggleList && first ? (
          <CardInput first={first} setFirst={setFirst}  />
        ) : (
          ""
        )}
      </div>
    </form>
  );
};
