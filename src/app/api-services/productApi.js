import axios from "axios";

let fetchProduct=()=>{
  return axios.get(`https://dummyjson.com/products`)
  .then((res)=>res.data.products)
} 
export {fetchProduct} 