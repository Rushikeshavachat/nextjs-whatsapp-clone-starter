"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCamera, FaCameraRetro } from "react-icons/fa";

import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";
function Avatar({type , image , setImage}) {
  const [hover , setHover]=useState(false)

  const [isContextMenuVisible , setContextMenuVisible]=useState(true)
  const [contextMenuCooordinates , setContextMenuCoordinates]=useState({
    x:0,
    y:0,
  })
  const [grabPhoto , setGrabPhoto]=useState(false)

  const [showPhotoLibrary , setShowPhotoLibrary]=useState(false)
const [showCapturePhoto , setShowCapturePhoto]=useState(false)
  const showcontextMenu=()=>{
    e.preventDefault()
  setContextMenuCoordinates({x : e.pageX , y: e.pageY})
  setContextMenuVisible(true)
  }
  useEffect(()=>{
if (grabPhoto) {
  const data = document.getElementById('photo-picker');
  data.click()

  document.body.onfocus=(e)=>{
    setTimeout(() => {
      setGrabPhoto(false)
    }, 1000);

  }
}
  },[grabPhoto])

 
  const contextMenuOptions = [
    { name: "Take a Photo", callback: () => { setShowCapturePhoto(false) } },
    { name: "Choose from Library", callback: () => { setShowPhotoLibrary(true) } },
    { name: "Upload Photo", callback: () => { setGrabPhoto(true) } },
    { name: "Remove Photo", callback: () => { setImage("/default_avatar.png") } }
  ];

  const photoPickerChange= async(e)=>{
   
const file = e.target.files[0];
console.log(file);
const reader = new FileReader()
const data = document.createElement("img");
reader.onload=function(event) {
data.src=event.target.result;
data.setAttribute("data-src" , event.target.result);

}
reader.readAsDataURL(file)
setTimeout(() => {
  setImage(data.src)
}, 100);
  }
  
 

      
    

    
  return < >
<div className="flex items-center justify-center ">
{ type ==="sm" &&(
  <div className="relative h-12 w-12 " >
 <Image  src={image} alt="avatar "  className="rounded-full" fill/>
    </div>
)}
{ type ==="lg" &&(
  <div className=" relative h-14 w-14 " >
 <Image  src={image} alt="avatar"  className="rounded-full" fill/>
    </div>
)}
{ type ==="xl " &&(
  <div className="   h-60 w-60  "
  onMouseEnter={()=>setHover(true)}
  onMouseLeave={()=>setHover(false)}
  >
    <div className={`bg-photopicker-overlay-background z-0 absolute  h-60 w-60     ${hover ?"visible" : "hidden"} `}
    onClick={e=>{}}
    >
    <FaCamera className="text-2xl " id="context-opener"   onClick={e=>{}}/>
    <span  className="text-2xl " id="context-opener"  onClick={e=>{}}>Change <br/> Profile <br/> Photo</span>
    </div>
  <div className=" flex items-center justify-center h-60 w-60  ">
 <Image  src={image} alt="avatar"   className="rounded-lg" fill/>
    </div>
    </div>
)}
</div>
{!contextMenuOptions && <ContextMenu
options={contextMenuOptions}
coordinates={contextMenuCooordinates}
contextMenu={isContextMenuVisible}
setContextMenu={setContextMenuVisible}
/>
}
{showCapturePhoto && <CapturePhoto  setImage={setImage} hide={setShowCapturePhoto}/>}
{showPhotoLibrary &&  <PhotoLibrary setImage={setImage} hidePhotoLibrary={setShowPhotoLibrary}/>}
{ grabPhoto &&  <PhotoPicker onChange={photoPickerChange} />}
  </>
}

export default Avatar;
