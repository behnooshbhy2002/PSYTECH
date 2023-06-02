import React, { useState } from 'react'
import './recipeItem.css'
function RecipeItem() {
  const [title,setTitle]=useState("");
  const [date,setData]=useState("");
  const [text,setText]=useState("");


  return (
    <div className="card-wrapper">
      <div className="card-body">
        <div className='front-card'>
          <br></br>
          <h3>جلسه 1</h3>
          <h5>19/02/1402</h5>
        </div>
        <div className='back-card'>
          <p>مظالعه کتاب مردی به نام اوه ،
            توجه به احساسات و....
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeItem