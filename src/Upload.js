import React, { useState } from "react";
import axios from 'axios';
import Gen from "./Gen";
import Modal from './Modal'

const Upload = () => {

  const [images, setImages] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [opt, setOpt] = useState();
  const [checked, setChecked] = useState(true);

  

  const handleCheck = ()=>{
    setChecked(!checked)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && checked == false) {
      const reader = new FileReader();
      reader.onloadend = () => {
          const formData = new FormData();
          formData.append('image_file', file);
          formData.append('size', 'auto');
          axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
              'X-Api-Key': 'API_KEY',
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
                const blob = new Blob([response.data], { type: 'image/jpeg' });
                const reader = new FileReader();
                reader.onloadend = function () {
                  if(opt == "one"){
                    setImages([...images, reader.result]);
                  }
                  else if(opt == "two"){
                    setBottoms([...bottoms,reader.result]);
                  }
                  else if(opt == "three"){
                    setShoes([...shoes,reader.result]);
                  }
    };
        reader.readAsDataURL(blob);
            })
    }
      reader.readAsDataURL(file);
     
    } 
    else{
      const file = event.target.files[0];
      if (file && checked == true) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if(opt == "one"){
            setImages([...images, reader.result]);
          }
          else if(opt == "two"){
            setBottoms([...bottoms,reader.result]);
          }
          else if(opt == "three"){
            setShoes([...shoes,reader.result]);
          }
        }
        reader.readAsDataURL(file);
      }
    }
  };  


  return (
    <div>

      <div className="block justify-center p-10 md:flex">
<div>

<div>
        <p className="text-lg">Type</p>
        <div className="flex">
          <button className="p-2 ml-0 m-2 rounded-md" onClick={()=>setOpt("one")} id={opt+1}>Tops</button>
          <button className="p-2 m-2 rounded-md" onClick={()=>setOpt("two")} id={opt+2}>Pants</button>
          <button className="p-2 m-2 rounded-md" onClick={()=>setOpt("three")} id={opt+3}>Shoes</button>
        </div>
        <div>
          <p className="text-gray-500 mt-2">Remove background <span><input type="checkbox" onChange={handleCheck}/></span></p>
        </div>
        <Modal images={images} bottoms={bottoms} shoes={shoes}/>
      </div>

      <div>
      <p className="text-lg mt-10">Upload</p>


<div className="flex items-center justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-24 mt-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="text-sm text-gray-500">Click or drag & drop</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden"   onChange={handleFileChange} />
    </label>
</div> 


      </div>
</div>
 

<div className="mt-10 md:mt-0 ml-0 md:ml-10">
<Gen images={images} bottoms={bottoms} shoes={shoes}/>
</div>

      </div>   
    </div>
  );
};

export default Upload;
