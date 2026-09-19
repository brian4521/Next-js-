import { fetchProductDetails } from '@/app/api-services/productApi'
import ProductDetailData from '@/app/components/product-list/ProductDetailsData'
import React from 'react'



export const metadata = {
 
};



export default async function ProductDetail({params}) {
  let {pid} = await params

  let data= await fetchProductDetails(pid)
  console.log("here is data",data)
 
  metadata.title = data.title
  metadata.description = data.description



  return (
    <div>
      <ProductDetailData data={data} />
        
    </div>
  )
}
