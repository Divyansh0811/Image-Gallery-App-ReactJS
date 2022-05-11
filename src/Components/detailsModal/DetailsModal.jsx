import React from 'react'
import axios from 'axios'
const DetailsModal = ({image, download, tags, closeModal}) => {

  const handleDownload = async() => {
    const downloadLink = download + '&client_id=7e77ZDTiplGh4iAI_dDimxMd3OLP-_Gi3IsQgpcaAOI'
    const file = await axios.get(downloadLink)
    const originalImage=file.data.url;
    const image = await fetch(originalImage);
   
    //Make image blob
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
    const link = document.createElement('a')
    link.href = imageURL;
    link.download = "image.png";
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)  
   };
  return (
    <div className='details-modal'>
      <button className='btn'onClick={() => closeModal(false)}>X</button>
      <img src={image} alt="error"/>
      <div className='details-modal-content'>
      <button onClick={handleDownload}>Download</button>
        <div className='detail-modal-tags'>
          {tags.map((value) => <p> {value.title}</p> )}
        </div>
      </div>
    </div>
  )
}

export default DetailsModal