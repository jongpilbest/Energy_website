
import React from "react";
import icon from '../icon/logo.svg'
function Header(){
return(
  <header className="
  h-11
  w-[100%]




  flex
  flex-row
  items-center
  justify-between
  ">

  <div className="
  flex
   w-[35%]
   h-9
   bg-white
   py-1
   items-center
rounded-3xl
border-2
border-blue-100


   justify-evenly
  " >
   <p className="font-inter font-semibold text-xs ">Home</p>
   <p  className="font-inter font-semibold text-xs ">Product</p>
   <p className="font-inter font-semibold text-xs ">About</p>
   <p className="font-inter font-semibold text-xs ">Service</p>

  </div>
  <img className="h-14" src={icon}></img>
  </header>
)

}
export default Header