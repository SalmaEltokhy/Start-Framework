import React from 'react'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return <>
 <div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

</div>
<form className="max-w-lg mx-auto py-5 mt-10 px-5 md:px-0">
<h2 className="my-4 pb-4 font-bold text-4xl text-center text-slate-700 pt-10 uppercase">CONATCT SECTION</h2>
<div className="flex justify-center items-center mb-10 pb-5">
      <div className="line bg-slate-700"></div>
      <i className="fa-solid fa-star px-4 text-slate-700"></i>  
      <div className="line bg-slate-700"></div>
    </div>


    <div className="relative z-0 w-full mb-9 group">
      <input type="number" name="floating_age" id="floating_age" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="floating_age" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
  </div>



    <div className="relative z-0 w-full mb-9 group">
      <input type="number" name="floating_age" id="floating_age" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="floating_age" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
  </div>




  <div className="relative w-full mb-9 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="relative z-0 w-full mb-9 group">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="floating_password" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className='text-left'>
  <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"> send Message </button>

  </div>
</form>








  
  </>
}

