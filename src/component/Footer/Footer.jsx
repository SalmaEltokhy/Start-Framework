import React from 'react'
import styel from './Footer.module.css'

export default function Footer() {
  return <>
 <footer className='relative bottom-0 left-0 right-0 text-white bg-slate-800'>


  <div className='p-5 text-center mx-auto bg-slate-800'>
  <div className="row py-8 my-5 gap-8 sm:gap-0">
      <div className="w-auto p-5 sm:w-1/3 sm:p-0 mx-auto">
       <div className="p-4">
        <h3 className='font-bold text-2xl'>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
  </div>
 

  <div className="w-auto sm:w-1/3 mx-auto">
      <div className="p-4">
        <h3 className='font-bold text-2xl'>AROUND THE WEB</h3>
        <div className='p-4'>
          <span><i className="fa-brands fa-facebook icon-social text-xl mx-1 icon"></i></span>
          <span><i className="fa-brands fa-twitter icon-social text-xl icon mx-1"></i></span>
          <span><i className="fa-brands fa-linkedin icon-social text-xl icon mx-1"></i></span>
          <span><i className="fa-solid fa-globe icon-social text-xl icon mx-1"></i></span>
        </div>
        </div>
      </div>

      <div className="w-auto sm:w-1/3 ">     
      <div className="p-4">
        <h3 className='font-bold text-2xl'>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>              
      </div>              


</div>
  </div>

<div className={styel.p}>
<p className={styel.styel}>Copyright © Your Website 2021</p>
</div>

      </footer>
 

      
     
   

 





  
  
  
  </>
   
  
}
