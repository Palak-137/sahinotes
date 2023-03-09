import React from "react";
import "../App.css";

import { FaPlus, FaHome, FaBook } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div class="col-auto me-0">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 text-white min-vh-100">
          <ul
            class="nav nav-pills flex-column mb-sm-auto mb-0  mt-5 align-items-center align-items-sm-start"
            id="menu"
          >
            <li class="nav-item">
              <button class=" align-middle  btn btn-success add-notes">
                <FaPlus class="fs-4"></FaPlus>{" "}
                <span class="ms-1 d-none d-sm-inline ">New Notes</span>
              </button>
            </li>
            <li>
              <div data-bs-toggle="collapse" class="nav-link  align-middle">
                <FaHome class="fs-4"></FaHome>{" "}
                <span class="ms-1 d-none d-sm-inline">Home</span>{" "}
              </div>
            </li>
            <li>
              <div data-bs-toggle="collapse" class="nav-link  align-middle ">
                <FaBook class="fs-4"></FaBook>
                <span class="ms-1 d-none d-sm-inline">Saved Notes</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
