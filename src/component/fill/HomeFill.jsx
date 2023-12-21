import React from 'react'
import "./HomeFill.css";
import { FaSearchengin } from 'react-icons/fa';
import { CgSearch } from 'react-icons/cg';
import { MdEqualizer, MdOutlineEqualizer } from 'react-icons/md';
import VideoList from './VideoList';
function HomeFill() {
  return (
    <div className="main">
<div className="flex">

<div className="inputarea">
<MdOutlineEqualizer size={30} color='red' style={{marginRight:30}}/>
<div className="enclose">
<input type="text" placeholder='just type anything to such videos'  className='actualinput'/>
 <CgSearch size={20} color='black' style={{padding:6}}/>
</div>

</div>
</div>
<div className="sear">
  <h5>Searched <span className='vidsp'>videos</span> </h5>
</div>
<VideoList/>
    </div>
  )
}

export default HomeFill