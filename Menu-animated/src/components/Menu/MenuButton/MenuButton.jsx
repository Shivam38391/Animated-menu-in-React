import React, { useContext } from "react";
import "./style.scss";
import { MenuContext } from "../MenuManager/MenuManager";

function MenuButton() {


  const {open , setOpen }  = useContext( MenuContext )
  return (
    <>
      <div className="menu-button-wrap">
        <button className="menu-button" onClick={() => setOpen(!open)}>
          <span />
        </button>
      </div>
    </>
  );
}

export default MenuButton;
