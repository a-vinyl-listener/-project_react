import React from 'react'

import { Header } from '../Header/Header'
import { Footer} from '../Footer/Footer'
import { Health } from '../Health/Health'
import { ShopSingle } from '../ShopSingle/ShopSingle'
import { RelatedProducts } from '../relatedProducts/RelatedProducts'


export const SingleShop = () => {
  return (
    <>
      <Header />
        <ShopSingle />
        <Health />  
        <RelatedProducts />
      <Footer />       
    </>
  )
}