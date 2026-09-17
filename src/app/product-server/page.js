import React from 'react'
import { fetchProduct } from '../api-services/productApi'
import ProductList from '../components/product-list/productList'

export default async function ProductServer() {
  let data = await fetchProduct()
  console.log("here is data", data)
  return (
    <div>
      <h1 className='text-4xl text-center'>This is product server page</h1>
      <ProductList data={data}/>

    </div>
  )   
}
