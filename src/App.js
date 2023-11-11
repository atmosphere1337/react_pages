import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pdf from "./pages/pdf/Pdf";
import Home from "./pages/home/Home";
import City from "./pages/city/City"

function Headerbtn({name='kek'})
{
    return (
      <div class="col border">
        <a href="kek" class="btn bg-info">{name}</a>
      </div>
    );
}

function Navleft()
{
    return(
        <div class="row">
              <Headerbtn name="Home"/>
              <Headerbtn name="Shop"/>
              <Headerbtn name="Menu"/>
        </div>
    );
}

function Header()
{
    return(
      <div class="col-12 bg-primary py-3">
          <div class="row">
              <div class="col border"><Navleft/></div>
              <div class="col-6 border">Second</div>
              <div class="col border">Third</div>
          </div>
      </div>
    );
}
function Sidebar()
{
    return(
      <div class="col-4 bg-info py-3">
          Sidebar
      </div>
    );
}
function Content()
{
    return(
      <div class="main col-8 bg-warning h-100 py-3">
          <h4>Main</h4>
          <p class="mb-5">Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape 
          swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade 
          ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh 
          synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p> 
      </div>
    );
}
function Footer()
{
    return(
      <div class="row w-100">
          <div class="col-12 py-3 bg-danger">
              Footer
          </div>
      </div>
    );
}
function Hsc()
{
    return(
        <div class="row grow w-100">
          <Header />
          <Sidebar />
          <Content />
        </div>
    );
}
function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pdf" element={<Pdf />} />
          <Route path="/city" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
