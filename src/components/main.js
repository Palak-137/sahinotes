import "../App.css";
import Header from "./Header";
import Search from "./Search";
import data from "./data/data.js";
import {  Routes, Route, NavLink } from "react-router-dom";
import Notes from './Notes'
import Noteslist from "./Noteslist";
import About from "./About";

function Main() {
  console.log("data", data.length);
  return (
    <>
        <div>
          <Search />
          <div className="row">
            <div className="col-3 m-0">
              <Header />
            </div>
            <div className="col-9 m-0">
              <div className="gradiant"></div>
              <div>
                <div className="main">
                <div class="cover">
                  <div className="profile">
                    <div class="image"></div>
                    <h6>
                      Om Khandade <br />
                    </h6>
                  </div>
                  <div className="button-box">
                    <button className="btn btn-success">Subscribe</button>
                  </div>
                  </div>
                  <div
                    className="name-link"
                    style={{
                      display: "flex",
                      fontSize: "18px",
                      margin: "20px",
                      marginTop: "0px",
                    }}
                  >
                    <div style={{ margin: "20px", marginBottom: "0px" }}>
                      <NavLink
                        to="/"
                        className="link"
                        style={({ isActive }) => ({
                          color: isActive ? "#098041" : "black",
                          textDecoration: isActive ? "underline" : "none",
                        })}
                      >
                        Notes
                        <span className="tag">{data.length}</span>
                      </NavLink>
                    </div>
                    <div style={{ margin: "20px", marginBottom: "0px" }}>
                      <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                          color: isActive ? "#098041" : "black",
                          textDecoration: isActive ? "underline" : "none",
                        })}
                      >
                        Notelists
                        <span className="tag">1</span>
                      </NavLink>
                    </div>
                    <div style={{ margin: "20px", marginBottom: "0px" }}>
                      <NavLink
                        to="/contact"
                        style={({ isActive }) => ({
                          color: isActive ? "#098041" : "black",
                          textDecoration: isActive ? "underline" : "none",
                        })}
                      >
                        About
                      </NavLink>
                    </div>
                  </div>
              </div>
              <Routes>
                  <Route exact path="/" element={<Notes />} />
                  <Route exact  path="/about" element={<Noteslist />} />
                  <Route exact  path="/contact" element={<About />} />
              </Routes>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Main;
