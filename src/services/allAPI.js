import { commonAPI } from "./commonAPI";
import { serverUrl } from "./serverUrl";


//upload video

export const uploadVideo = async(reqBody)=>{
    //make POST http request "http://localhost:4000/videos" to add videos to the json-server return response to the add Component
    
    return await commonAPI("POST",`${serverUrl}/videos`,reqBody)
}
//get all videos from json

export const getAllVideo = async()=>{
    //make GET http request to  "http://localhost:4000/videos" to get all videos from json-server return response to the view Component
    
    return await commonAPI("GET",`${serverUrl}/videos`,"")
} 

//get a video

export const getAVideo = async(id)=>{
    //make GET http request to  "http://localhost:4000/videos/id" to get all videos from json-server return response to the video card Component
    
    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
} 

//delete a video

export const deleteVideo = async(id)=>{
    //make DELETE http request to  "http://localhost:4000/videos/id" to delete videos from json-server return response to the video card Component
    
    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
} 

//store watching video history to json server

export const addToHistory = async(videoDetails)=>{
    //make POST http request "http://localhost:4000/hsitory" to store videos to the json-server return response to the videocard Component
    
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}
//GET watching video history to json server

export const getAllHistory = async()=>{
    //make Get http request "http://localhost:4000/hsitory" to get videos from json-server return response to the watch-history Component
    
    return await commonAPI("GET",`${serverUrl}/history`,"")
}

export const deleteHistory = async(id)=>{
    //make delete http request "http://localhost:4000/hsitory/id" to delete videos from json-server return response to the watch-history Component
    
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}





//add  caetgory to json server
export const addToCategory = async(reqBody)=>{
    //make POST http request "http://localhost:4000/categories" to store videos to the json-server return response to the category Component
    
    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}

//get all category from json server
export const getAllCategory = async()=>{
    //make GET http request "http://localhost:4000/categories" to get all videos from the json-server return response to the category Component
    
    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

//delete all category from json server
export const deleteCategory = async(id)=>{
    //make DELETE http request "http://localhost:4000/categories/id" to delete all videos from the json-server return response to the category Component
    
    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

//update a category from json server
export const updateCategory = async(id,body)=>{
    //make PUT http request "http://localhost:4000/categories/id" to update a videos to the json-server return response to the category Component
    
    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
}