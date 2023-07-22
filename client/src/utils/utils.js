import axios from 'axios'
import React, { useState } from 'react'

export const API_URL = 'http://localhost:5001/image/'
export const IMG_URL = 'http://localhost:5001/img/'


 export  const postApi=async(method,data)=>{
   
    try{
        // let percentCompleted=0
        // const config = {
        //     onUploadProgress:  function  (progressEvent) {
        //          percentCompleted =  Math.round((progressEvent.loaded * 100) / progressEvent.total);
        //     }
        // };
        const response = await axios(`${API_URL}upload`,{
            method,
            data,
            // onUploadProgress: async function (progressEvent) {
            //     percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //     console.log(percentCompleted);
            //     await setPercent(percentCompleted)
            // }
            
        })

        return response
    }catch(error){
        console.log(console.error(error));
    }
}

export const fetchApi=async()=>{
    try {
        const response =await axios(API_URL)
        return response
        
    } catch (error) {
        console.log(error);        
    }
}

