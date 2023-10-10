import {Nav} from "./Components/Nav"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home} from "./Components/Home"
import {Services} from "./Components/Services"
import {Contact} from "./Components/Contact"
import {AboutUs} from "./Components/AboutUs"
import {Card,CardContent} from "@mui/material"
import {Help} from "./Components/Help"
import { Shopping } from "./Components/Shopping";
import { DataShop } from "./Components/DataShop";
import { Object } from "./Components/Object";


function App() {
  return (
    <div className="App">
      {/* <Object/>      
      <DataShop/> */}
      {/* Browser router has accessed to elements which are written within its element. */}
      <BrowserRouter>
      <Card>
        <CardContent>
        <Nav/>
        </CardContent>
      </Card>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/services" element={<Services />} />        
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/help" element={< Help/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
