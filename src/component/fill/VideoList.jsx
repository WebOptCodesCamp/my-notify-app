import React, { useEffect, useState } from 'react'
import "./VideoList.css"
import { FiHeart, FiUploadCloud, FiVideo } from "react-icons/fi";
import videos from './VideoJson'
import thumb1  from "./thumb/thumb1.png"
import thumb2  from "./thumb/thumb2.png"
import thumb3  from "./thumb/thumb3.png"
import thumb4  from "./thumb/thumb4.png"
import thumb5  from "./thumb/thumb5.png"
import thumb6  from "./thumb/thumb6.png"
import profile1 from  "./thumb/profile/jeff.png"
import profile2 from  "./thumb/profile/jane.png"
import profile3 from  "./thumb/profile/jack.png"
import profile4 from  "./thumb/profile/ken.png"
import profile5 from  "./thumb/profile/peter.png"
import profile6 from  "./thumb/profile/raj.png"
function VideoList({searchterm}) {

  const lists = [thumb1,thumb2,thumb3,thumb4,thumb5,thumb6];

  const profiles = [profile1,profile2,profile3,profile4,profile5,profile6];
  const [filter , setFilter] = useState([]);

  useEffect(()=>{
setFilter(videos.filter((item)=>item.title.toLowerCase().includes(searchterm.toLowerCase())));



  },[searchterm]);
  return (
    <div className="vidmain">
{filter.map((vid,index)=>
  <div className="box">
    <div className="imagearea">
    <img src={lists[index]} alt="" className="thumb" />
    </div>
    <div className="vidinfo">
      <h4 className='vidtitle'>{vid.title}</h4>
      <div className="keep">
      <img src={profiles[index]} alt="" className="profile" />
      <h5 className='viduser'>{vid.user}</h5>
      </div>
      <div className="keep" style={{marginTop:10}}>
  <FiHeart color='green' style={{marginLeft:24}}/> <span style={{color:"white",marginLeft:8}}>likes:{vid.likes}</span>
  <FiVideo color='white'  style={{marginLeft:24}} /> <span style={{color:"white",marginLeft:8}}>likes:{vid.likes}</span>


      </div> 
    </div>
    </div>
)}

    
    



    </div>
  )
}

export default VideoList