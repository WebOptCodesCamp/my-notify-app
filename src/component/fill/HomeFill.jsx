import React, { useState } from 'react'
import "./HomeFill.css";
import { FaSearchengin } from 'react-icons/fa';
import { CgSearch } from 'react-icons/cg';
import { MdEqualizer, MdOutlineEqualizer } from 'react-icons/md';
import VideoList from './VideoList';
function HomeFill() {

  const [searchterm , setSearchterm] = useState("");
  return (
    <div className="main">
<div className="flex">

<div className="inputarea">
<MdOutlineEqualizer size={30} color='red' style={{marginRight:30}}/>
<div className="enclose">
<input type="text" value={searchterm} placeholder='just type anything to such videos' onChange={(e)=>{
  setSearchterm(e.target.value)}} className='actualinput'/>
 <CgSearch size={20} color='black' style={{padding:6}}/>
</div>

</div>
</div>
<div className="sear">
  <h5>Searched <span className='vidsp'>videos</span> </h5>
</div>
<VideoList searchterm={searchterm}/>
    </div>
  )
}

export default HomeFill