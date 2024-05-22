import React, { useEffect, useRef } from "react";

function ContextMenu({options , coordinates , contextMenu , setContextMenu}) {

  const contextMenuRef= useRef(null)
  useEffect(()=>{
    const handleOutsideClick=(event)=>{
if (event.target.id ==="context-opener") {
  if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
    setContextMenu(false)
  }
}
    }
    document.addEventListener("click" , handleOutsideClick)
    return()=>{
      document.removeEventListener("click" , handleOutsideClick)

    }
  },[])
  const handleClick=(e , callback)=>{
e.stopPropagation();
setContextMenu(false)
callback()
  }
  return <div className={`bg-dropdown-background py-2  z-[0]  flex flex-col items-center justify-center  `} ref={contextMenuRef}
  style={{ top: coordinates.x , left : coordinates.y}}
  > 

<ul>
      { options?.map(({ name, callback }) => (
        <li
          key={name}
          onClick={(e) => handleClick(e, callback)}
          className="px-5 py-2 cursor-pointer hover:bg-background-default-hover"
        >
          <span className="text-white">{name}</span>
        </li>
      )) }
    </ul>
  </div>;
}

export default ContextMenu;
