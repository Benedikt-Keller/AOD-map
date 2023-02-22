import React from "react";
import { useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";

function setWidth(setCurrentWidth, width){
  setCurrentWidth(width)
}


function Sidebar({activeMarkerTitle, activeMarkerImages, sidebarWidth, setSidebarWidth, activeLatLong, setActiveMarkerLat, setActiveMarkerLng}){
    return(
    <div className={sidebarWidth}>
    <div className="sidebar-header"> 
      <div className="sidebar-header-title">
        <div className="sidebar-heading"> 
        {activeMarkerTitle} 
        <VscChromeClose className="close-button" onClick={() => {
          setSidebarWidth("sidebar-collapsed")
          document.documentElement.style.setProperty("--leaflet-offset", "0%")
          setActiveMarkerLat(1000)
          setActiveMarkerLng(1000)
        }}/>
        </div>  
      </div>
    </div>
    
    {activeMarkerImages.map(element => (
      <>
      <div className="content-container">
        <img src={element.link} className="img-style" alt=""></img>
        <p className="basic-text"> 
        <b> date: </b>{element.date} <br/>
        <b> tags: </b>{element.tags} <br/>
        <b> notes: </b>{element.notes} <br/>
        <b> desc: </b>{element.desc} <br/>
        </p>
      </div>
      </>
    ))
    }
    </div>

    )
    
}

export default Sidebar;