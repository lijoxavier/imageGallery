import React, { useEffect, useState } from 'react'
import './upload.css'
import { postApi, fetchApi, API_URL, IMG_URL, } from '../../utils/utils'
import axios from 'axios'
import Gallery from '../Gallery/Gallery'
const Upload = () => {
  const [dragActive, setDragActive] = useState(false)
  const [images, setImages] = useState([])
  const [fileName, setFileName] = useState('')
  const [percent, setPercent] = useState(0)
  const [upload, setUpload] = useState(false)

  const uploadImage = async (formData) => {
    try {
      setUpload(true)
      let percentCompleted
      const config = {
        onUploadProgress: function (progressEvent) {
          percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setPercent(percentCompleted)
          // percentCompleted===100 && setPercent(0)
        }
      };
      const response = await axios.post(API_URL + 'upload', formData, config)
      setImages(response.data.result)
      // console.log(percentCompleted,"==percentCompleted");

    }
    catch (error) {
      console.log(error);
    }

    setUpload(false)
  }
  console.log(upload, "==upload");
  const handleImage = async (event) => {
    event.preventDefault()
    const { 0: file, length } = event.target.files
    console.log(file, "==fileName", length);
    if (length) {
      console.log(event.target.files);
      // console.log(event.target.files[0].name);
      setFileName(file.name)
      const formData = new FormData()
      formData.append("upload_file", file)
      uploadImage(formData)

      // setPercent(0)
    }

  }
  console.log(fileName, "==fileName");
  console.log(percent, "==percent");

  const fetchImage = async () => {
    const response = await fetchApi()
    setImages(response.data.result)
  }
  useEffect(() => {
    fetchImage()
  }, [])

  const handleDrag = (event) => {
    event.preventDefault()
    event.stopPropagation()
    // console.log(event);
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true)
    }
    else if (event.type === 'dragleave') {
      console.log("sds");
      setDragActive(false)
    }
  }
  const handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(event);
    const { 0: file, length } = event.dataTransfer.files
    if (length) {
      setFileName(file.name)
      const formData = new FormData()
      formData.append('upload_file', file)
      uploadImage(formData)

    }
  }
  console.log(dragActive);
  return (
    <div className='upload-container'>

      <div className="heading">
        <h3>Photo Gallery</h3>
        <p>A picture is worth thousand words.</p>
      </div>

      <input type="file" onChange={handleImage} style={{ display: "none" }} accept='image/*' id='file' />

      <label id="label-file-upload" htmlFor="file" className={dragActive ? 'dragactive' : ''} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
        <ion-icon name='add-circle-outline' type="file" style={{color: "#EFD9C2"}} width="200px"></ion-icon>

        <div>
          <p>drag and drop here</p>
          {/* <label htmlFor="file">

          <button className="upload-button" >upload</button>
          </label> */}
        </div>

      </label>
      {/* {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag}></div>} */}
      {upload && <div className="filename">
        <h3>lijodsffdf</h3>
        {/* <h3>{fileName}</h3> */}
      </div>}
      {upload && <progress value={percent} max={100} />}
      {upload && <label className='percent-text' htmlFor="">{percent}%</label>}


      {images && <Gallery images={images} />}

    </div>
  )
}

export default Upload