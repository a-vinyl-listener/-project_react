import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Location } from "../Location/Location";
import { Requisites } from "../Requisites/Requisites";
import { Work } from "../Work/Work";
import { ContactForm } from "../ContactForm/ContactForm";


export const UsContact = () => {
  return (
    <>
      <Header />
      <Requisites />
      <Work />
      <Location />
      <ContactForm />
      <Footer />
    </>
  );
};