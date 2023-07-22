import React, { Fragment, useState } from 'react'
import { IMG_URL } from '../../utils/utils'
import './gallery.css'
import Modal from '../Modal/Modal'

const Gallery = ({ images }) => {
    const [isModal, setIsModal] = useState("")
    // const openModal=(index)=>{
    //     setIsModal(index.toString())

    // }
    return (

        <Fragment>


            <div className='image-gallery'>

                {images?.map((image, index) => <img src={IMG_URL + image} alt="" key={index} onClick={() => setIsModal(index.toString())} />)}
                {/* {isModal && <Modal images={images} setIsModal={setIsModal} isModal={isModal}/>} */}
                {/* {isModal && <Modal>{images} {isModal} {setIsModal} </Modal>} passing like these works but array contains more than these items */}
                {isModal && <Modal images={images} setIsModal={setIsModal} isModal={isModal} />}
                {/* {isModal && <Modal>{[images,isModal,setIsModal]} </Modal>} */}
            </div>


        </Fragment>
    )
}

export default Gallery