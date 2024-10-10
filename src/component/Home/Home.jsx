import React from 'react'
import logo from "../../assets/avataaars.svg";
import { Helmet } from 'react-helmet';

export default function Home() {
  return<>
<div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

</div>




    <div className="bg-[#1ABC9C] pt-14 mt-8 text-center pb-6">
    <div className="container p-5 text-white">
      <img src={logo} alt="" className='m-auto mb-3 w-56' />
    <h2 className="my-4 py-4 font-bold text-2xl md:text-4xl uppercase">START FRAMEWORK</h2>
    <div className="flex justify-center items-center mb-5">
      <div className="line bg-white"></div>
      <i className="fa-solid fa-star px-4"></i>  
      <div className="line bg-white"></div>
    </div>
    <span>Graphic Artist - Web Designer - Illustrator</span>
    </div>
</div>
  
  
  
  </>
}
