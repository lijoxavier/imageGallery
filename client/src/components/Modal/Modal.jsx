import React, { Children, Fragment, useEffect, useRef, useState } from 'react'
import { GrPrevious, GrNext } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";
import './modal.css'
import { IMG_URL } from '../../utils/utils'

const Modal = ({ images, setIsModal, isModal }) => {
    // console.log(children,"==children");
    // const [images, ,isModal,,setIsModal,]=children  //no need to use this we are passing children as array
    // const [images,isModal,setIsModal]=children
    const [index, setIndex] = useState(parseInt(isModal))
    const modalInnerRef = useRef(null);
    console.log(isModal, "==isModal");
    const viewPrevImage = () => {
        setIndex((prev) => prev - 1 < 0 ? images.length - 1 : prev - 1)
        // setIndex((images.length-1).toString())
    }
    const viewNextImage = () => {
        setIndex(index + 1 > images.length - 1 ? 0 : index + 1)
    }
    console.log(index);



    return (

        <Fragment>

        
            <div className="modal-outer" onClick={() => setIsModal("")}>
            </div>

            
            <div className='modal-inner' >
                <img src={IMG_URL + images[index]} ></img>

                <GrPrevious className='prev but' onClick={viewPrevImage} size={30}/>
                <GrNext className='next but' onClick={viewNextImage} size={30} />

                <IoCloseCircle className='close' onClick={() => setIsModal("")} size={30}  />

            </div>
        
            {/* <div className="modal-close">
                dsd
            </div>  */}
           
        </Fragment>

    )
}

export default Modal