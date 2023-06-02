import React, { useState } from "react";
import RecipeItem from "./recipeItem";
import "./DrrecupeHistory.css";
import { InputTextarea } from "primereact";
import { Button } from "primereact/button";
import { Row, Column } from "react";
function RecipeHistory() {
  const [name, setName] = useState("علی عزیزی");
  const [value, setValue] = useState("");
  const str = "نسخه های بیمار: " + name;
  return (
    <div dir="rtl">
      <h2>{str}</h2>
      <div>
        <div className="card-bodyy">
          <InputTextarea
            className="txtAddRecipe"
            autoResize
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={18}
            cols={20}
          />
        </div>
        <Button className="btn-save-rec" label="ثبت نسخه" />
      </div>
      <div className="recipe-wrapper">
        
        <RecipeItem className="recipeItem"></RecipeItem>

        <RecipeItem className="recipeItem"></RecipeItem>

        <RecipeItem className="recipeItem"></RecipeItem>

        <RecipeItem className="recipeItem"></RecipeItem>
        <RecipeItem className="recipeItem"></RecipeItem>
        <RecipeItem className="recipeItem"></RecipeItem>
      </div>
    </div>
  );
}

export default RecipeHistory;
