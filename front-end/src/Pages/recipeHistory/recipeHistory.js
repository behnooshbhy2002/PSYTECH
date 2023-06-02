import React from 'react'
import RecipeItem from './recipeItem';
import './recipeHistory.css'
import {Row,Column} from 'react'
function RecipeHistory() {
  return (
    <div>
      <h1>نسخه های من</h1>
      <div className="recipe-wrapper" dir="rtl">
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

export default RecipeHistory