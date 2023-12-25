import React from "react";
import MenuButton from "./MenuButton/MenuButton";
import MenuContent from "./MenuContent/MenuContent";

function Menu() {
  return (
    <>
      <div className="menu-wrapper">
        <MenuButton />
        <MenuContent />
        Menu
      </div>
    </>
  );
}

export default Menu;
