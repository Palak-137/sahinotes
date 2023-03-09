import React from "react";
import "../App.css";
import logo from "../style/logo.svg";
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <div className="search">
      <nav class="navbar navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src={logo}></img>
          </a>
          <form class="d-flex search-bar">
            <input
              class="form-control me-0"
              type="search"
              aria-label="Search"
            />
            <button class="btn btn-success" type="submit">
              <FaSearch/>
            </button>
          </form>
        </div>
          </nav>
    </div>
  );
}

export default Search;
