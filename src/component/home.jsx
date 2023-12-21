import React from 'react'
import "./home.css";
import { MdSubscriptions } from "react-icons/md";
import { SiAdobelightroomclassic, SiPostmates } from "react-icons/si";
import { MdFiberNew } from "react-icons/md";
import { FiHeart, FiUploadCloud } from "react-icons/fi";
import { TbChartInfographic } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdLocalPostOffice } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaBuysellads } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import HomeFill from './fill/HomeFill';

function Home() {


  return (
    <div className='main'>
      <header className="head">
        <HiOutlineMenuAlt2  size={35} color='lightgreen' style={{marginTop:12,marginLeft:12,cursor:"pointer"}}/>
      </header>
      <div className="aside">
<div className="sidebar">
<h4 className='subtext'><span style={{fontSize:14,marginLeft:2}}>  My Subscriptions   </span>  <MdSubscriptions className='push' size={24} color='red'/>  </h4>
<h4 className='subtext'><span>Classic Videos</span>  <SiAdobelightroomclassic size={24}  className='push'   color='blue' /> </h4>
<h4 className='subtext'><span style={{paddingRight:22}}  >New Videos</span>   <MdFiberNew  scale={30} color='white'  className='push'  /> </h4>
<h4 className='subtext'><span  style={{paddingRight:30}}> Trending </span><FiHeart  size={24} color='green'  className='push'  /></h4>

<div className="sidecon"> 
  <span className='contitle'>more options</span>
  <div className="place" style={{paddingTop:18}}>  <  TbChartInfographic size={30} color='blue'/><h6 className='stats'>statistics</h6></div>
  <div className="place"> <  CgProfile size={30} color='blue'/> <h6 className='stats'>sign in</h6></div>
  <div className="place">  <  FiUploadCloud size={30} color='blue'/><h6 className='stats'>upload</h6></div>
  <div className="place">  <  SiPostmates size={30} color='blue'/><h6 className='stats'>post</h6></div>
  <div className="place"> < MdFiberNew   size={30} color='blue'/><h6 className='stats'>suggestions</h6></div>
  <div className="place"> <  FaBuysellads size={30} color='blue'/><h6 className='stats'>online sell</h6></div>
  
 
  
 
  
  
</div>
</div>
<div className="content">
<HomeFill/>


</div>
      </div>
    </div>
  )
}

export default Home
