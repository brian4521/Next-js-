"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/common/ProductCard'
import axios from 'axios'

export default function Product() {
  let [product, setproduct] = useState([])
  let getProduct=()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
     
      setproduct(res.data.products)
    })
  }

  useEffect(()=>{
    getProduct()
  },[])
  
  return (
    <div>
      <h1 className='text-4xl text-center'>This is product page</h1>
      <div className='max-w-[1320px] mx-auto m-10'>
        <div className='grid grid-cols-4 gap-4'>
          {
            product.map((obj,index)=> <ProductCard  key={index} data={obj}/>)
          }
          
          
        </div>
      

      </div>
    
    </div>
  )
}
