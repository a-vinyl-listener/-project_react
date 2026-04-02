import { Farmy } from "../Farmy/Farmy"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Raspberry } from "../Raspberry/Raspberry"
import { RaspberryBlack } from "../RaspberryBlack/RaspberryBlack"


export const BlackRaspberry = () => {
  return (
    <>
      <Header/>
        <Raspberry />  
        <RaspberryBlack /> 
        <Farmy />   
      <Footer/>     
    </>
  )
}