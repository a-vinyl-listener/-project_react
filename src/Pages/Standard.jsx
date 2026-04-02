import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { PortfolioStandard } from "../PortfolioStandard/PortfolioStandard"
import { Products } from "../Products/Products"



export const Standard = () => {
  return (
    <> 
    <Header />
      <PortfolioStandard /> 
      <Products />    
    <Footer />    
  </>  
  )
}