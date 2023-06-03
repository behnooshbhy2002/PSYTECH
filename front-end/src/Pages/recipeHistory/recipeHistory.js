import React from "react";
import RecipeItem from "./recipeItem";
import "./recipeHistory.css";
import { Row, Column } from "react";
import { useLocation } from "react-router-dom";
function RecipeHistory() {
  const location = useLocation();
  let FileList = location.state;
  console.log(FileList);
  let session_list = FileList?.session_list;
  let medical_recorde = FileList?.medical_recorde?.id;
  console.log(session_list);
  return (
    <div>
      <h1>نسخه های من</h1>
      <div className="recipe-wrapper" dir="rtl">
        {session_list?.map((item) => {
          <RecipeItem className="recipeItem" data={item}></RecipeItem>;
        })}
      </div>
    </div>
  );
}

export default RecipeHistory;
