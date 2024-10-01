import React, { useEffect, useState} from 'react'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import { Button, Modal } from "flowbite-react";
import { Helmet } from 'react-helmet';

const images = [
 image1 , image2 ,image3,image1,image2,image3
];


export default function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };





  



  return <>
<div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

</div>



<div className="mx-auto pt-14 container">
<div>
<h2 className="mt-10 pb-8 font-bold text-4xl text-center text-slate-700 pt-5 uppercase">portfolio component</h2>
<div className="flex justify-center items-center mb-0 pb-3 md:mb-3">
      <div className="line bg-slate-700"></div>
      <i className="fa-solid fa-star px-4 text-slate-700"></i>  
      <div className="line bg-slate-700"></div>
    </div>
</div>


<div className='App p-4 relative'>
<div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => ( <div className='relative overflow-hidden rounded-lg' key={index}  onClick={() => openModal(index)}>
         
          <img
            key={index}
            src={image}
            alt={`img-${index}`}
            className="cursor-pointer rounded-lg w-full"
            />
                
            <div className='layer absolute top-0 left-0 right-0 bottom-0 text-center flex items-center justify-center border rounded-lg'>
              <i className='text-white fa-solid fa-plus fa-5x '></i>

            </div>
          </div>
          
        ))}
      </div>

  {modalIsOpen?  <div className="fixed inset-0 z-0 mode">
        </div>: false }

   <Modal show={modalIsOpen} size="xl" onClose={closeModal} className='md:w-[40%] mx-auto w-[60%] z-auto'>

      
    <Modal.Header>
        <div className="flex justify-between gap-2">
          <Button onClick={prevImage}>Prev</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>
      </Modal.Header>
      <Modal.Body>
   
      <img src={images[currentImageIndex]} alt={`img-${currentImageIndex}`} className="w-full h-auto rounded-lg z-auto" />

      </Modal.Body>





    </Modal>
    
     

</div>












   







  








    

</div>




















  </>

  
}
