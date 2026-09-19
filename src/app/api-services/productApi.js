import axios from "axios";

let fetchProduct=()=>{
  return axios.get(`https://dummyjson.com/products`)
  .then((res)=>res.data.products)
} 

let fetchProductDetails=(id)=>{
  return axios.get(`https://dummyjson.com/products/${id}`)
  .then((res)=>res.data)

}
export {fetchProduct, fetchProductDetails} 