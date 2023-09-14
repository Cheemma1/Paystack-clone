import Home from "../src/components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WhyPaystack } from "./components/MobileNav/WhyPaystack";
import NavMob from "./components/MobileNav/NavMob";


function App() {
  

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/"  element={ <Home/>}/>
        <Route path="/why" element={ <WhyPaystack/>}/>
        <Route path="/learn" element={ <WhyPaystack/>}/>
        <Route path="/why" element={ <WhyPaystack/>}/>
        <Route path="/why" element={ <WhyPaystack/>}/>
        <Route path="/mob" element={<NavMob/>}/> 
    </Routes>
    </Router>
     </div>
  )
}

export default App
