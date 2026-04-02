import React from 'react'

import { NewСards } from '../NewСards/NewСards'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { RecentNews } from '../RecentNews/RecentNews'

export const News = () => {
  return (
    <>
      <Header/>
        <RecentNews/>
        <NewСards/> 
      <Footer/>  
    </>
  ) 
}
