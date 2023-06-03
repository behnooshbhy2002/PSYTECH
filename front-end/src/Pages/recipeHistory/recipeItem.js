import React, { useState } from "react";
import "./recipeItem.css";
function RecipeItem(props) {
  //const [title,setTitle]=useState("");
  //const [date,setData]=useState("");
  //const [text,setText]=useState("");

  let title = props?.data?.title;
  let pre = props?.data?.pre;
  let date = props?.data?.date;

  return (
    <div className="card-wrapper">
      <div className="card-body">
        <div className="front-card">
          <br></br>
          <h3>{title}</h3>
          <h5>{date}</h5>
        </div>
        <div className="back-card">
          <p>{pre}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeItem;
