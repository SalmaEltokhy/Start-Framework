import React from 'react'
import { Helmet } from 'react-helmet'

export default function About() {
  return <>

<div>
<Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

</div>

  <div className="bg-[#1ABC9C] p-10 mt-8 text-white w-full">
    <div className="container py-10 mt-5">
    <h2 className="my-4 py-4 font-bold text-2xl md:text-4xl text-center uppercase">ABOUT COMPONENT</h2>
    <div className="flex justify-center items-center">
      <div className="line bg-white"></div>
      <i className="fa-solid fa-star px-4 text-white"></i>  
      <div className="line bg-white"></div>
    </div>
   <div className="flex"> 
    <div className="w-full md:w-2/5 p-4 mx-auto">
    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className="w-full md:w-2/5 p-4 mx-auto">
    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
   </div>
    </div>
    </div>

  
  
  </>
}
