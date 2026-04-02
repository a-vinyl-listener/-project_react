import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { OrganicFood } from "../OrganicFood/OrganicFood"
import { Research } from "../Research/Research"
import { Vitamin } from "../Vitamin/Vitamin"


export const MoreOrganicFood = () => {
  return (
    <>
      <Header />  
        <Research />   
        <OrganicFood />
        <Vitamin />                       
      <Footer />       
    </>    
  )
}