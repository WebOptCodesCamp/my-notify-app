import React from 'react'
import "./VideoList.css"
import videos from './VideoJson'
function VideoList() {
  return (
    <div className="vidmain">

 
{videos.map((video,index)=><div className="box">
    
 </div>
 )}


    </div>
  )
}

export default VideoList