import React, { useState } from "react";
import PopupMenu from "./PopupMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const Click = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setPopupOpen(true)}><GiHamburgerMenu/></div>
      <PopupMenu isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    
  
    </div>
  );
};

export default Click;
