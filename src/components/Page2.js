import React from "react";
import { FaArrowLeft, FaThumbsUp, FaShare } from "react-icons/fa";
import notes from "./data/large-notes.png";
import book_image from "./data/image1.png";

function Page2() {
  return (
      <div className="row page-2">
        <div className="col-7 m-3 p-3 image-side">
          <div className="heading-back">
            <a href="/">
              <FaArrowLeft  className="icon" />
              <h3>CIIPS:Triz Benchmarking( Lecture 8)</h3>
            </a>
          </div>
          <div className="image-notes-large">
            <img src={notes}></img>
          </div>
        </div>
        <div className="col notes-text-side p-5">
          <div className="likes-header">
            <FaThumbsUp className="icon" />
            <h4> 28 Likes</h4>
            <FaShare className="icon" />
            <h4> Share </h4>
          </div>
              <div className="cover">
                  <div>
            <div className="image"></div>
            <h6> Om Khandade </h6>
                      <p> GPA 10</p>
                      </div>
            <button className="btn btn-success">Follow</button>
          </div>
          <div className="desc">
            <h4> Description </h4>
            <p>
              Tristique posuere faucibus sed vel ut suspendisse. Pellentesque
              purus accumsan nisl platea odio metus. Egestas sit malesuada sit
              sit habitant. Odio ornare potenti neque diam urna id. Ultrices
              massa massa consequat habitant dui massa sapien et, morbi.
              Malesuada scelerisque non fermentum, velit ullamcorper vestibulum.
              Orci velit tortor ornare et urna arcu nisl. Ipsum neque nulla sed
              id venenatis.
            </p>
          </div>
          <div className="add">
            <h4>Resources</h4>
            <div className="row">
              <div className="col-md-8 m-3 note p-3">
                <div className="row">
                  <div className="col notes-image ">
                    <img src={book_image} />
                  </div>
                  <div className="col notes-text">
                    <a href="/page2">
                      Wheeler's Dental Anatomy, Physiology and Occlusion, 1st
                      South Asia Edition
                    </a>
                    <div className="small-text">
                      <button className="btn btn-warning">Buy on Amazon</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Page2;
