import Home from "../src/components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WhyPaystack } from "./components/MobileNav/WhyPaystack";
import NavMob from "./components/MobileNav/NavMob";
import LearnMob from "./components/MobileNav/LearnMob";
import SupportMob from "./components/MobileNav/SupportMob";
import DevelopersMob from "./components/MobileNav/DevelopersMob";


function App() {
  

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/"  element={ <Home/>}/>
        <Route path="/mob" element={<NavMob/>}/> 
        <Route path="/why" element={ <WhyPaystack/>}/>
        <Route path="/learn" element={ <LearnMob/>}/>
        <Route path="/support" element={ <SupportMob/>}/>
        <Route path="/dev" element={ <DevelopersMob/>}/>
   
    </Routes>
    </Router>
     </div>
  )
}

export default App
