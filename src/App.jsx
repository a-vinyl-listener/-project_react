import "./App.scss";
import { AboutUsPage } from "./Pages/AboutUsPage";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { Shops } from "./Pages/Shops";
import { News } from "./Pages/News";
import { SingleShop } from "./Pages/SingleShop";
import { Services } from "./Pages/Services";
import { Quality } from "./Pages/Quality";
import { Standard } from "./Pages/Standard";
import { BlackRaspberry } from "./Pages/BlackRaspberry";
import { TeamOur } from "./Pages/TeamOur";
import { MoreOrganicFood } from "./Pages/MoreOrganicFood";
import { UsContact } from "./Pages/UsContact";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/news" element={<News />} />
        <Route path="/single" element={<SingleShop />} />
        <Route path="/servicing" element={<Services />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/standard" element={<Standard />} />
        <Route path="/raspberry" element={<BlackRaspberry/>} />
        <Route path="/team" element={<TeamOur/>} />
        <Route path="/more" element={<MoreOrganicFood />} />
        <Route path="/contact" element={<UsContact />}  />
      </Routes>
    </>
  );
}
export default App;
