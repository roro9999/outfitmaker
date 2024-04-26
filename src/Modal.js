import React, { useState } from 'react'
import { FiArrowRight, FiX } from "react-icons/fi";


const Modal = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
      };

      const teeImages = props.images
      const bottomImages = props.bottoms
      const shoesImages = props.shoes

  return (
    <div>
        <button className="mt-2 flex text-gray-500" onClick={toggleModal}>Full closet <span className="mt-[5px] ml-2"><FiArrowRight/></span></button>

{modal && (
    <div className='w-full absolute top-0 bottom-0 left-0 right-0 z-30 flex justify-center'>
                <div className='absolute bg-[#00000025] w-full h-full z-0'></div>
        <div className='w-[50rem] h-[35rem] overflow-auto bg-[#fff] mt-48 rounded-md p-8 z-10'>
            <button className='' onClick={toggleModal}><FiX /></button>
            <p className='text-lg text-center'>Full Closet</p>

            <p className='mt-4'>Tops <span className='ml-2 text-gray-500'>{teeImages.length}</span></p>
            <div className='w-full flex flex-nowrap overflow-auto mt-6'>
            {teeImages.map((name, index) => (
                        <img className="w-64" key={index} src={name} />
                    ))}

          {teeImages == 0 && (
            <p className='mb-2 text-gray-500'>No tops</p>
                )}

            </div>


            <p className='mt-4'>Bottoms <span className='ml-2 text-gray-500'>{bottomImages.length}</span></p>
            <div className='w-full flex flex-nowrap overflow-auto mt-6'>
            {bottomImages.map((name, index) => (
                        <img className="w-44 mr-10" key={index} src={name} />
                    ))}

          {bottomImages ==0 && (
            <p className='mb-2 text-gray-500'>No bottoms</p>
                )}

            </div>


            <p className='mt-4'>Shoes <span className='ml-2 text-gray-500'>{shoesImages.length}</span></p>
            <div className='w-full flex flex-nowrap overflow-auto mt-6'>
            {shoesImages.map((name, index) => (
                        <img className="w-44 mr-10" key={index} src={name} />
                    ))}

          {shoesImages ==0 && (
            <p className='mb-2 text-gray-500'>No Shoes</p>
                )}

            </div>


         </div>
</div>
    )}
    </div>
  )
}

export default Modal