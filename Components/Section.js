import axios from 'axios'
import React, { useEffect, useState } from 'react'
// axios
// useState
// useEffect
const Section = () => {
const [Images, setImages] = useState([]);
useEffect(() => {
  getImage();
}, [])

 
  const getImage = async ()=>{
    try{
      // confirm('button clicked')
      const response =  await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
          setImages(data);
         console.log(Images);

    }catch(error){
      console.error("Error fetching images using axios library");
    }
  }

  return (
    <>
      <div className='section-container'>
        <button onClick={getImage} className='get-image'>Get Image</button>
          <div className="img-elem"> 
    {
      Images.map((image, index)=>{
        return <img id ={index} src={image.download_url}  width="350px" height="200px" className="img" alt ={Math.random()*10} />
      })
    }
        </div>

      </div>
    </>
  )
}

export default Section