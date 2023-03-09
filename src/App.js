import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./components/data/data.js";
import Page2  from "./components/Page2";
import Main from "./components/main";
import Notes from "./components/Notes";
import Noteslist from "./components/Noteslist";
import About from "./components/About";

function App() {
  console.log("data", data.length);
  return (
   
    <BrowserRouter>
       <div className="App">
        <Routes>
          <Route path="/" element={<Main />} >
                  <Route exact path="/" element={<Notes />} />
                  <Route exact  path="/about" element={<Noteslist />} />
                  <Route exact  path="/contact" element={<About />} />
          </Route>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
