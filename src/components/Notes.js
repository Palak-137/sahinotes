import React from 'react'
import img1 from "./data/img1.png";
import img2 from "./data/img2.png";
import img3 from "./data/img3.png";

function Notes() {
  const data = [
    {
        image: img1,
        text: "First Year: Dental Anatomy - Bones Complete (4 topics)",
        views: "51K views",
        status: "2 days ago"
    },
    {
        image: img2,
        text: "CIIPS: Triz benchmarking (Lecture 8)",
        views: "29K views",
        status: "6 days ago"
    },
    {
        image: img3,
        text: "JEE: Organic Chemistry - Halogens in 5 minutes",
        views: "51K views",
        status: "in draft"
    }
  ]

  return (
      <div>
      <div className="row">
                  {data.map((note) => {
                    return (
                      <div className="col m-3 note p-3">
                        <div className="row">
                          <div className="col notes-image ">
                            <img src={note.image} />
                          </div>
                          <div className="col notes-text">
                            <a href="/page2">{note.text}</a>
                            <div className="small-text">
                              <p>{note.views}</p>
                              <p>{note.status}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
      </div>
  )
}

export default Notes