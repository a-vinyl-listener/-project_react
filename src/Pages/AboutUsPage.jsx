import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { AboutUs } from '../AboutUs/AboutUs';
import { Things } from '../Things/Things';
import { Choice } from '../Choice/Choice';
import { Team } from '../Team/Team';
import { Proposal } from '../Proposal/Proposal';

export const AboutUsPage = () => {
  return (
    <>
      <Header/>
        <AboutUs/>
        <Things/> 
        <Choice/>   
        <Team/> 
        <Proposal/>      
      <Footer/>
    </>
  )
}
  

